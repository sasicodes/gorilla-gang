import shortenAddress from '@utils/helpers/shortenAddress'
import React from 'react'
import { useConnect, useContract, useSigner } from 'wagmi'

import ContractMetaData from '../../artifacts/contracts/GOG.sol/GOG.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string

const ProjectDetails = () => {
  const [{ data: signerData }] = useSigner()
  const [
    {
      data: { connected }
    }
  ] = useConnect()
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
      <div className="space-y-6 bg-gray-800 rounded-lg p-5">
        <div className="space-y-2">
          <div className="text-sm font-semibold text-gray-400 uppercase">
            About
          </div>
          <p className="text-md">
            Gorilla Gang ($GOG) is a generative art collectables, randomly
            generated with different traits like color, eye and backgrouds. Each
            Gorilla is a unique, non-fungible token (NFT) on the Ethereum
            blockchain.
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-sm text-gray-400 font-semibold uppercase">
            Contract
          </div>
          <a
            className="font-mono hover:text-blue-400 text-md truncate block"
            target="_blank"
            rel="noreferrer"
            href={`https://etherscan.io/address/${contractAddress}`}
          >
            {shortenAddress(contractAddress, 12)}
          </a>
        </div>
        {connected && (
          <button
            onClick={() => onMint()}
            className="hover:bg-gray-700 flex items-center justify-center w-full px-4 py-3 overflow-hidden border-2 border-transparent border-gray-700 rounded-lg focus:outline-none"
          >
            Mint
          </button>
        )}
      </div>
    </div>
  )
}

export default ProjectDetails
