var IERC1155TokenReceiver = artifacts.require("./IERC1155.sol");

module.exports = function (deployer) {
  deployer.deploy(IERC1155TokenReceiver);
};
