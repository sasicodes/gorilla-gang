import React from 'react'

import { NftMetaData } from './MintedList'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string

const Card = ({ item }: { item: NftMetaData }) => {
  return (
    <div className="bg-gray-800 divide-y divide-gray-700 rounded-lg">
      <div className="p-4">
        <img
          className="w-full rounded"
          src={item.image}
          alt=""
          draggable={false}
        />
      </div>
      <div className="p-2 space-y-4 overflow-x-hidden">
        <div className="p-2">
          <h1 className="font-semibold tracking-wide">{item.name}</h1>
          <a
            className="font-mono text-xs text-blue-400 truncate"
            target="_blank"
            rel="noreferrer"
            href={`https://testnets.opensea.io/assets/${contractAddress}/${item.tokenId}`}
          >
            View on etherscan
          </a>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-3">
            {item.attributes.map(({ trait_type, value }, idx) => (
              <div key={idx} className="p-2 px-3 bg-gray-900 rounded-lg">
                <span className="block text-xs font-semibold uppercase">
                  {trait_type}
                </span>
                <span className="font-mono">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
