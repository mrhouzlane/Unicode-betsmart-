var IConditionalTokens = artifacts.require("./IConditionalTokens.sol");

module.exports = function (deployer) {
  deployer.deploy(IConditionalTokens);
};
