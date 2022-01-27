import React from 'react'
import { useNetwork } from 'wagmi'

const Unsupported = () => {
  const [{ data: network }, switchNetwork] = useNetwork()

  return (
    <div className="overflow-x-hidden grid py-10 place-items-center w-full bg-gray-800 rounded-lg">
      {switchNetwork && (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-md">{network.chain?.name} is not supported.</p>
          </div>
          <button
            onClick={() => switchNetwork(4)}
            className="hover:bg-gray-700 mx-auto flex items-center justify-center px-4 py-3 overflow-hidden border-2 border-transparent border-gray-700 rounded-lg focus:outline-none"
          >
            Switch network
          </button>
        </div>
      )}
    </div>
  )
}

export default Unsupported
