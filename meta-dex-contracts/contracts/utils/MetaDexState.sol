// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MetaDexState {
    uint256 minimumLockDuration = 30 * 1 days;
    uint256 minimumAmount = 1000 * 10 ** 8; // token decimals will be in 10 ** 8

    mapping(address => bool) isLiquidityProvider; // Address of LPs
    mapping(address => uint256) lockedAmount; // Amount locked in the pool by LPs
    mapping(address => uint256) lockDuration; // Lock duration of each lp
}
