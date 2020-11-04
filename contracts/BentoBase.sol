// SPDX-License-Identifier: MIT
import "@openzeppelin/upgrades-core/contracts/Initializable.sol";

contract BentoBase is Initializable {
  uint256 value;
  function initialize(uint256 initialValue) public initializer {
    value = initialValue;
  }
}