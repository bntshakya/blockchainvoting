const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "tribe finish expire mystery bridge sound amazing scan pizza equal churn direct";
const infuraProjectId = "ac39326384824ab6ac8e8afcaef49548";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  compilers:{
solc:{
version: "^0.5.0"
}
  },
  networks: {
    goerli:{
provider:() => new HDWalletProvider(mnemonic,`https://goerli.infura.io/v3/${infuraProjectId}`),
network_id : 5,
chain_id : 5,
gas : 5500000,
confirmation: 2,
timeoutBlocks: 200,
skipDryRun: true
    }
  }
};
