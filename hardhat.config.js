require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan")

/** @type import('hardhat/config').HardhatUserConfig */

const RINKBEY_RPC_URL =process.env.RINKBEY_RPC_URL
const PRIVATE_KEY =process.env.PRIVATE_KEY
const ETHER_SCAN_API_KEY =process.env.ETHER_SCAN_API_KEY
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    rinkeby:{
      url:RINKBEY_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId:4,
    },
  },
  solidity: "0.8.17",
  etherscan:{
    apikey:ETHER_SCAN_API_KEY,
  }
};
