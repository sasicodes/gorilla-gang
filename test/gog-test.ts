import { ethers } from 'hardhat'

describe('GOG Contract', function () {
  it('should log address of contract', async function () {
    const GOG = await ethers.getContractFactory('GOG')
    const contract = await GOG.deploy()
    await contract.deployed()

    console.log('GOG Contract - ', contract.address)

    const mint = await contract.mintItem()
    console.log('🚀 ~ file: gog-test.ts ~ line 12 ~ mint', mint)
    const token = await contract.tokenURI(1)
    console.log('🚀 ~ file: gog-test.ts ~ line 13 ~ token', token)
  })
})
