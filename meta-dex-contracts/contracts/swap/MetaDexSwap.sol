// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../utils/MetaDexHelpers.sol";
import "../utils/MetaDexState.sol";
import "../pool/MetaDexPool.sol";
import "../Admin/MetaDexAdmin.sol";

contract MetaDexSwap is MetaDexHelpers {
    // On chain pools
    MetaDexPool USDT_POOL;
    MetaDexPool USDC_POOL;
    MetaDexAdmin ADMIN;

    mapping(bytes32 => bool) internal _lockedSwaps;

    // modifier

    modifier onlyAdmin() {
        require(ADMIN.isAdmin(msg.sender), "MetaDexSwap: Not admin");
        _;
    }

    constructor(address _usdt, address _usdc) {
        USDT_POOL = MetaDexPool(_usdt);
        USDC_POOL = MetaDexPool(_usdc);
    }

    /**
     * @notice Execute a swap
     * Funtion verifies signature then extracts swap data from _encodedSwap
     * It uses the data to determine which pool to send funds to
     * User must have approved the MetaDexSwap contract to spend their funds
     * @dev This function is called by the Relayer contract
     * @param _encodedSwap contains all the information needed to execute the swap
     * @param r r value of the swap signature
     * @param s s value of the swap signature
     * @param v v value of the swap signature
     * @param _initiator address of swap initiator
     */
    function executeSwapRequest(
        uint256 _encodedSwap,
        bytes32 r,
        bytes32 s,
        uint8 v,
        address _initiator
    ) external {
        bytes32 swapId = _getSwapId(_encodedSwap, _initiator);
        require(
            _lockedSwaps[swapId] == false,
            "MetaDexSwap: Swap request already executed"
        );
        // Verify signature
        require(
            _verifyReleaseSignature(_encodedSwap, r, s, v, _initiator),
            "MetaDexSwap: Invalid signature"
        );

        // Decode swap data
        (
            uint256 _amount,
            uint256 _fee,
            uint256 _nonce,
            bytes8 _outChain,
            bytes8 _inChain,
            address _tokenIn,

        ) = _decodeSwapData(_encodedSwap);

        // Transfer funds from user to MetaDexSwap contract for tokenIn
        IERC20(_tokenIn).transferFrom(_initiator, address(this), _amount);

        _lockedSwaps[swapId] = true;
    }

    function executeReleaseRequest(
        uint256 _encodedSwap,
        bytes32 r,
        bytes32 s,
        uint8 v,
        address _initiator
    ) external onlyAdmin {
        bytes32 swapId = _getSwapId(_encodedSwap, _initiator);
        require(
            _lockedSwaps[swapId] == true,
            "MetaDexSwap: Swap request does not exist"
        );
        // Verify signature
        require(
            _verifyReleaseSignature(_encodedSwap, r, s, v, _initiator),
            "MetaDexSwap: Invalid signature"
        );

        // Decode swap data
        (
            uint256 _amount,
            uint256 _fee,
            uint256 _nonce,
            bytes8 _outChain,
            bytes8 _inChain,
            address _tokenIn,

        ) = _decodeSwapData(_encodedSwap);

        // Transfer funds from MetaDexSwap contract to pool
        _checkPoolAndTransfer(_tokenIn, _initiator, _amount);
    }

    function cancelSwapRequest() external {}

    function _checkPoolAndTransfer(
        address _tokenIn,
        address _initiator,
        uint256 _amount
    ) internal returns (MetaDexPool) {
        // Check MetaDexState to see if pool exists
        // If pool exists, execute swap
        if (_tokenIn == address(USDT_POOL.token())) {
            // Increment Pool token Balance

            require(
                USDT_POOL.token().transferFrom(
                    _initiator,
                    address(USDT_POOL),
                    _amount
                ),
                "MetaDexSwap: Transaction failed"
            );
        } else if (_tokenIn == address(USDC_POOL.token())) {
            require(
                USDC_POOL.token().transferFrom(
                    _initiator,
                    address(USDC_POOL),
                    _amount
                ),
                "MetaDexSwap: Transaction failed"
            );
        } else {
            revert("MetaDexSwap: Invalid tokenIn");
        }
    }
}
