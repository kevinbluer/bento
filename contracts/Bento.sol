// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Bento {
  string bento;

  function setBento(string memory newBento) public {
    bento = newBento;
  }

  function getBento() public view returns (string memory) {
    return bento;
  }
}