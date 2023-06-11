// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MetaDexSwap {
    // On chain pools
    IERC20 USDT_POOL;
    IERC20 USDC_POOL;

    constructor(address _usdtPool, address _usdcPool) {
        USDT_POOL = IERC20(_usdtPool);
        USDC_POOL = IERC20(_usdcPool);
    }

    /**
     * @notice Execute a swap
     * Funtion verifies signature then extracts swap data from _encodedSwap
     * It uses the data to determine which pool to send funds to
     * User must have approved the MetaDexSwap contract to spend their funds
     * @dev This function is called by the MetaDexRouter contract
     * @param _encodedSwap contains all the information needed to execute the swap
     * @param r r value of the swap signature
     * @param s s value of the swap signature
     * @param v v value of the swap signature
     * @param _signer address of swap initiator
     */
    function executeSwap(
        uint256 _encodedSwap,
        bytes32 r,
        bytes32 s,
        uint8 v,
        address _signer
    ) external {
        // Verify signature
        require(
            _signer ==
                ecrecover(keccak256(abi.encodePacked(_encodedSwap)), v, r, s),
            "MetaDexSwap: Invalid signature"
        );

        // Decode swap data
        (
            address _tokenIn,
            address _tokenOut,
            uint256 _amountIn,
            uint256 _amountOut,
            uint256 _deadline
        ) = abi.decode(
                (abi.encodePacked(_encodedSwap)),
                (address, address, uint256, uint256, uint256)
            );

        // Transfer funds from user to MetaDexSwap contract
        IERC20(_tokenIn).transferFrom(_signer, address(this), _amountIn);

        // Execute swap
        if (_tokenIn == address(USDT_POOL)) {
            USDT_POOL.transfer(_tokenOut, _amountOut);
        } else if (_tokenIn == address(USDC_POOL)) {
            USDC_POOL.transfer(_tokenOut, _amountOut);
        } else {
            revert("MetaDexSwap: Invalid tokenIn");
        }
    }
}
