// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../utils/MetaDexHelpers.sol";
import "../utils/MetaDexState.sol";
import "../pool/MetaDexPool.sol";

contract MetaDexSwap is MetaDexHelpers {
    // On chain pools
    MetaDexPool USDT_POOL;
    MetaDexPool USDC_POOL;

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
    function executeSwap(
        uint256 _encodedSwap,
        bytes32 r,
        bytes32 s,
        uint8 v,
        address _initiator
    ) external {
        // Verify signature
        require(
            _verifySignature(_encodedSwap, r, s, v, _initiator),
            "MetaDexSwap: Invalid signature"
        );

        // Decode swap data
        (
            uint256 _amountIn,
            uint256 _fee,
            uint256 _nonce,
            bytes8 _outChain,
            bytes8 _inChain,
            address _tokenIn,

        ) = _decodeSwapData(_encodedSwap);

        // Transfer funds from user to MetaDexPool contract for tokenIn

        // Execute swap
        // Check MetaDexState to see if pool exists
        // If pool exists, execute swap
    }
}
