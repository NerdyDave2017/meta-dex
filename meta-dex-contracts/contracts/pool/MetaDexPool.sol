// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "../utils/MetaDexState.sol";

contract MetaDexPool is MetaDexState, Context {
    IERC20 immutable token;
    string private name;

    constructor(address _token, string memory _name) {
        token = IERC20(_token);
        name = _name;
    }

    // Register, deposit and lock funds in pool
    function registerAndDeposit(
        uint256 _amount,
        uint256 _lockDuration
    ) external {
        address liquidityProvider = _msgSender();
        require(
            isLiquidityProvider[liquidityProvider] == false,
            "Already registered"
        );
        require(lockedAmount[liquidityProvider] == 0, "Already registered");
        require(_amount >= minimumAmount, "Amount too small");
        require(
            _lockDuration >= minimumLockDuration,
            "Lock duration too small"
        );

        isLiquidityProvider[liquidityProvider] = true;
        lockedAmount[liquidityProvider] = _amount;
        lockDuration[liquidityProvider] = _lockDuration;

        require(token.transfer(address(this), _amount), "Transaction failed");
    }

    // Deposit when already registered
    function deposit(uint256 _amount) external {
        address liquidityProvider = _msgSender();
        require(
            isLiquidityProvider[liquidityProvider] == true,
            "Already not registered"
        );
        require(lockedAmount[liquidityProvider] > 0, "Already not registered");
        require(_amount >= minimumAmount, "Amount too small");

        lockedAmount[liquidityProvider] += _amount;

        require(token.transfer(address(this), _amount), "Transaction failed");
    }

    // Lock on target chain on swap request
    function lock(
        uint256 _encodedSwap,
        bytes32 r,
        bytes32 s,
        uint8 v,
        address _initiator
    ) external returns (bytes32 swapId) {}

    // Unlock locked fund
    function unlock(
        uint256 _encodedSwap,
        bytes32 r,
        bytes32 s,
        uint8 v,
        address _initiator,
        bytes32 swapId
    ) external {}

    // Release locked funds to recipient
    function release(
        uint256 _encodedSwap,
        bytes32 r,
        bytes32 s,
        uint8 v,
        address _initiator,
        address _recipient,
        bytes32 swapId
    ) external {}
}
