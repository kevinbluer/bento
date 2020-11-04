// SPDX-License-Identifier: MIT
import "@openzeppelin/upgrades-core/contracts/Initializable.sol";

contract BentoUpgrade is Initializable {
  uint256 value;

  function getValue() public view returns (uint256) {
    return value;
  }

  function setValue(uint256 newValue) public returns (uint256) {
    value = newValue;
    return value;
  }
}