import { Asset } from '@utils/types'
import React from 'react'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string

const Card = ({ item }: { item: Asset }) => {
  return (
    <div className="bg-gray-800 divide-y divide-gray-700 rounded-lg">
      <div className="p-4">
        <img
          className="w-full rounded"
          src={item.image_url}
          alt=""
          draggable={false}
        />
      </div>
      <div className="p-2 space-y-2 overflow-x-hidden">
        <div className="p-2 flex items-center justify-between">
          <h1 className="font-semibold tracking-wide">{item.name}</h1>
          <div className="inline-flex space-x-3 items-center justify-between">
            <a
              title="View Owner"
              className="text-xs hover:text-blue-400"
              target="_blank"
              rel="noreferrer"
              href={`https://rinkeby.etherscan.io/address/${item.owner.address}`}
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
              title="View on Opensea"
              className="text-xs hover:text-blue-400"
              target="_blank"
              href={`https://testnets.opensea.io/assets/${contractAddress}/${item.token_id}`}
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
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-3">
            {item.traits.map(({ trait_type, value }, idx) => (
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
