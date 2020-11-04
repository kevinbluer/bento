const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const BentoBase = artifacts.require('BentoBase');
// const BoxV2 = artifacts.require('BoxV2');

module.exports = async function (deployer) {
  const instance = await deployProxy(BentoBase, [42], { deployer });
  // const upgraded = await upgradeProxy(instance.address, BoxV2, { deployer });
}