import { ethers } from "hardhat";

async function main() {
  const Blockies = await ethers.getContractFactory("Blockies");
  const BlockiesTxn = await Blockies.deploy();

  await BlockiesTxn.deployed();

  console.log("Blockies deployed to:", BlockiesTxn.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
