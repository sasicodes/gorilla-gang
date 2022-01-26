import { ethers } from 'hardhat'

async function main() {
  const GOG = await ethers.getContractFactory('GOG')
  const GOGTxn = await GOG.deploy()

  await GOGTxn.deployed()

  console.log('GOG deployed to:', GOGTxn.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
