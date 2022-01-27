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
      <div className="p-2 space-y-2 overflow-x-hidden">
        <div className="p-2 flex items-center justify-between">
          <h1 className="font-semibold tracking-wide">{item.name}</h1>
          <div className="inline-flex space-x-3 items-center justify-between">
            <a
              className="font-mono text-xs hover:text-blue-400 truncate"
              target="_blank"
              rel="noreferrer"
              href={`https://etherscan.io/address/${item.owner}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              className="font-mono text-xs hover:text-blue-400 truncate"
              target="_blank"
              href={`https://opensea.io/assets/${contractAddress}/${item.tokenId}`}
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-3">
            {item.attributes.map(({ trait_type, value }, idx) => (
              <div key={idx} className="p-2 px-3 bg-gray-900 rounded-lg">
                <span className="block text-gray-400 text-xs font-semibold uppercase">
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
