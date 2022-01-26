import shortenAddress from '@utils/helpers/shortenAddress'
import React from 'react'
import { useContract, useSigner } from 'wagmi'

import ContractMetaData from '../../artifacts/contracts/GOG.sol/GOG.json'

const ProjectDetails = () => {
  const [{ data: signerData }] = useSigner()

  const contract = useContract({
    addressOrName: '0xf310282af8F4cca4633A3e1eC99Fa1bC83c94A7c',
    contractInterface: ContractMetaData.abi,
    signerOrProvider: signerData
  })

  const onMint = async () => {
    await contract.mintItem()
  }

  return (
    <div className="flex flex-col lg:w-1/4 overflow-x-hidden">
      <div className="bg-gray-800 p-4 rounded-lg space-y-4">
        <div className="uppercase text-xs font-semibold">Contract</div>
        <a
          className="text-sm font-mono truncate"
          target="_blank"
          rel="noreferrer"
          href="https://etherscan.io/address/0xf310282af8F4cca4633A3e1eC99Fa1bC83c94A7c"
        >
          {shortenAddress('0xf310282af8F4cca4633A3e1eC99Fa1bC83c94A7c', 10)}
        </a>
        <button
          onClick={() => onMint()}
          className="w-full hover:bg-gray-700 flex items-center justify-center px-4 py-3 overflow-hidden  border-2 border-transparent outline-none rounded-lg border-gray-700"
        >
          Mint
        </button>
      </div>
    </div>
  )
}

export default ProjectDetails
