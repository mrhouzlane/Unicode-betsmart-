var IERC1155 = artifacts.require("./IERC1155.sol");

module.exports = function (deployer) {
  deployer.deploy(IERC1155);
};
