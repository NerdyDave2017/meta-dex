// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MetaDexHelpers {
    function _verifySignature(
        uint256 _encodedSwap,
        bytes32 r,
        bytes32 s,
        uint8 v,
        address _signer
    ) internal pure returns (bool) {
        require(_signer != address(0), "Signer cannot be empty address");
        require(v == 27 || v == 28, "Invalid signature");
        require(
            uint256(s) <=
                0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0,
            "Invalid signature"
        );

        return
            _signer ==
            ecrecover(keccak256(abi.encodePacked(_encodedSwap)), v, r, s);
    }

    function _decodeSwapData(
        uint256 _encodedSwap
    )
        internal
        pure
        returns (
            address _tokenIn,
            address _tokenOut,
            uint256 _amountIn,
            uint256 _amountOut
        )
    {
        return
            abi.decode(
                (abi.encodePacked(_encodedSwap)),
                (address, address, uint256, uint256)
            );
    }
}
