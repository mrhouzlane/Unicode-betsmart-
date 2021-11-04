var ConditionalTokensWalelt = artifacts.require(
  "./ConditionalTokensWalelt.sol"
);

module.exports = function (deployer) {
  deployer.deploy(ConditionalTokensWalelt);
};
