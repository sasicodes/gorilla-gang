import { ethers } from 'hardhat'

describe('GOG Contract', function () {
  it('should log address of contract', async function () {
    const GOG = await ethers.getContractFactory('GOG')
    const contract = await GOG.deploy()
    await contract.deployed()

    console.log('GOG Contract - ', contract.address)

    await contract.mintItem()
    await contract.mintItem()
    await contract.mintItem()
    const token = await contract.tokenURI(1)
    console.log('🚀 ~ file: gog-test.ts ~ line 14 ~ token', token)
  })
})
