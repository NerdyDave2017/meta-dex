// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;
import "@openzeppelin/contracts/access/Ownable.sol";

contract MetaDexAdmin is Ownable {
    // Authorized admin signing wallets
    mapping(address => bool) public isAdmin;

    // Events
    event AdminAdded(address indexed admin);

    function addAdmin(address _admin) external onlyOwner {
        isAdmin[_admin] = true;
        emit AdminAdded(_admin);
    }
}
