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
    }
}
