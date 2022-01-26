import { ethers } from 'hardhat'

describe('GOG Contract', function () {
  it('should log address of contract', async function () {
    const GOG = await ethers.getContractFactory('GOG')
    const GOGReceipt = await GOG.deploy()
    await GOGReceipt.deployed()

    console.log('GOG Contract - ', GOGReceipt.address)
  })
})
