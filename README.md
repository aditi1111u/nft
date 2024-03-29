# nft

This guide outlines the steps for creating a 5-item NFT collection using DALL-E 2 or Midjourney, storing the items on IPFS via Pinata, deploying an NFT smart contract to the Goerli Ethereum Testnet, and bridging the NFTs to the Polygon Mumbai network.

### 1. Generate NFT Artworks

1. **Use DALL-E 2 or Midjourney** to generate 5 unique images based on a creative prompt you choose.
2. Save these images locally once you are satisfied with the results.

### 2. Store Images on IPFS

1. **Sign Up/Login** to [Pinata](https://pinata.cloud/).
2. **Upload** your images to Pinata to store them on IPFS. Make note of the IPFS hash (CID) provided for each image.

### 3. Deploy an ERC721 or ERC1155 Smart Contract

1. **Develop** your NFT smart contract in Solidity, implementing either the ERC721 or ERC1155 standard. Use OpenZeppelin contracts for simplicity and security.
2. Include a `promptDescription` function that returns the prompt used for generating the images.
3. **Test** your contract locally using Hardhat.
4. **Deploy** your contract to the Goerli Ethereum Testnet using Hardhat.

### 4. Map Your NFT Collection (Optional)

1. Use the **Polygon Token Mapper** to map your NFT collection from Ethereum to Polygon for better visualization and interaction.

### 5. Hardhat Script for Batch Minting

1. **Create a Hardhat script** that uses the ERC721A contract (if using ERC721) for efficient batch minting of your NFTs.
2. The script should mint all 5 NFTs to your address or specified addresses.

### 6. Hardhat Script for Batch Transfer via FxPortal Bridge

1. **Approve** the NFTs for transfer by interacting with the contract and approving the FxPortal bridge contract to move your NFTs.
2. **Develop a Hardhat script** to deposit the NFTs into the bridge contract, effectively transferring them from Ethereum to Polygon Mumbai.
3. **Verify** the `balanceOf` on Mumbai for the receiving addresses to ensure the NFTs were successfully bridged.

### 7. Overview of Project Repo

- **Project Overview**: Briefly describe your project, including the NFT collection and its theme.
- **Requirements**: List any prerequisites for running your project, such as Node.js, Hardhat, Alchemy/Infura API keys, etc.
- **Installation Steps**: Provide step-by-step instructions to install dependencies, compile smart contracts, and deploy them.
- **Usage Guide**: Explain how to use the Hardhat scripts for batch minting and transferring NFTs, including any necessary commands.
- **Contract Interaction**: Detail how users can interact with your NFT contract, including viewing their NFTs, transferring them, and checking balances on both networks.
- **Additional Notes**: Include any other relevant information, such as troubleshooting tips, contact information, or acknowledgments.

By following these steps and documenting the process, you will successfully create, deploy, and bridge a unique NFT collection across Ethereum and Polygon networks.
- - -
