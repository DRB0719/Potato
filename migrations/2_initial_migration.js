const PotatoManage = artifacts.require('PotatoManage');

module.exports = function (deployer) {
  deployer.deploy(PotatoManage);
};
