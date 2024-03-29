/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    
    goerli: {
      /*url: "https://rpc.ankr.com/eth_goerli",*/
      url:"https://goerli.blockpi.network/v1/rpc/public",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
