const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const BentoBase = artifacts.require('BentoBase');
const BentoUpgrade = artifacts.require('BentoUpgrade');

module.exports = async function (deployer) {
  const instance = await BentoBase.deployed(); 
  const upgraded = await upgradeProxy(instance.address, BentoUpgrade, { deployer });
}