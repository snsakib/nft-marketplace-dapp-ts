const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const nftMarketplace = await ethers.deployContract("NFTMarketplace");
  await nftMarketplace.waitForDeployment();

  fs.writeFileSync(
    "./scripts/config.js",
    `
  export const NFTMarketplaceAddress = "${nftMarketplace.target}"
  `
  );

  console.log(`Contract Deployed to ${nftMarketplace.target}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
