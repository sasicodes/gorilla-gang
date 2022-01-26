import shortenAddress from '@utils/helpers/shortenAddress'
import React from 'react'
import { useContract, useSigner } from 'wagmi'

import ContractMetaData from '../../artifacts/contracts/GOG.sol/GOG.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string

const ProjectDetails = () => {
  const [{ data: signerData }] = useSigner()

  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: ContractMetaData.abi,
    signerOrProvider: signerData
  })

  const onMint = async () => {
    await contract.mintItem()
  }

  return (
    <div className="flex flex-col overflow-x-hidden lg:w-1/4">
      <div className="p-4 space-y-4 bg-gray-800 rounded-lg">
        <div className="text-xs font-semibold uppercase">Contract</div>
        <a
          className="font-mono text-sm truncate"
          target="_blank"
          rel="noreferrer"
          href="https://etherscan.io/address/0xf310282af8F4cca4633A3e1eC99Fa1bC83c94A7c"
        >
          {shortenAddress('0xf310282af8F4cca4633A3e1eC99Fa1bC83c94A7c', 10)}
        </a>
        <button
          onClick={() => onMint()}
          className="flex items-center justify-center w-full px-4 py-3 overflow-hidden border-2 border-transparent border-gray-700 rounded-lg outline-none hover:bg-gray-700"
        >
          Mint
        </button>
      </div>
    </div>
  )
}

export default ProjectDetails
