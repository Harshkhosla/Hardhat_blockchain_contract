require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./task/block-number")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-gas-reporter")
require("solidity-coverage")

/** @type import('hardhat/config').HardhatUserConfig */

const RINKBEY_RPC_URL =process.env.RINKBEY_RPC_URL
const PRIVATE_KEY =process.env.PRIVATE_KEY
const ETHER_SCAN_API_KEY =process.env.ETHER_SCAN_API_KEY
const COINMARKETCAP_API_KEY =process.env.COINMARKETCAP_API_KEY
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    rinkeby:{
      url:RINKBEY_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId:5,
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
  },
  solidity: "0.8.17",
  etherscan:{
    apikey:ETHER_SCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};
