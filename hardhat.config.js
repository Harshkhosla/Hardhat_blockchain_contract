require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */

const RINKBEY_RPC_URL =process.env.RINKBEY_RPC_URL
const PRIVATE_KEY =process.env.PRIVATE_KEY
module.exports = {
  networks:{
    rinkeby:{
      url:RINKBEY_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId:4,
    },
  },
  solidity: "0.8.17",
};
