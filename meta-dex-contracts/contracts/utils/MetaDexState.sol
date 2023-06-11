// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MetaDexState {
    address[] tokens;
    mapping(address => bool) public isToken;

    // Tokens to pool

    constructor() {}

    function addToken(address _token) external {
        require(_token != address(0), "Token cannot be empty address");
        require(!isToken[_token], "Token already exists");
        tokens.push(_token);
        isToken[_token] = true;
    }

    function removeToken(address _token) external {
        require(_token != address(0), "Token cannot be empty address");
        require(isToken[_token], "Token does not exist");

        _removeTokenFromArray(_token);
        isToken[_token] = false;
    }

    function _removeTokenFromArray(address _token) internal {
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i] == _token) {
                tokens[i] = tokens[tokens.length - 1];
                tokens.pop();
                break;
            }
        }
    }
}
