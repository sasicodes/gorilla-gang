import React, { useEffect, useState } from 'react'
import { Connector, useAccount, useConnect, useNetwork } from 'wagmi'

const WalletSelector = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const [
    {
      data: { connector, connectors, connected },
      error,
      loading
    },
    connect
  ] = useConnect()
  const [{ data: accountData }] = useAccount()
  const [{ data: networkData }] = useNetwork()

  const onConnect = async (x: Connector) => {
    await connect(x)
  }

  const isConnected = connected && accountData?.address

  return (
    <div className="inline-block w-full p-3 space-y-2 overflow-hidden text-left align-middle transition-all transform">
      {isConnected && (
        <div className="w-full p-4 space-y-2 border rounded-lg border-gray-600">
          <div className="flex items-center justify-between">
            <h6 className="text-sm text-gray-400">
              Connected with {connector?.name}
            </h6>
            <span className="inline-block px-2 py-1 text-xs rounded-lg bg-gray-800">
              {networkData.chain?.name}
            </span>
          </div>
          <h6 className="cursor-pointer">{accountData?.address}</h6>
        </div>
      )}
      {connectors.map((x, i) => {
        return (
          <button
            key={i}
            className="hover:bg-gray-700 w-full flex items-center justify-center px-4 py-3 overflow-hidden  border-2 border-transparent outline-none rounded-lg border-gray-700"
            onClick={() => onConnect(x)}
            disabled={
              mounted ? !x.ready || x.id === accountData?.connector?.id : false
            }
          >
            <span className="flex items-center justify-between w-full">
              {mounted ? x.name : x.id === 'injected' ? x.id : x.name}
              {mounted ? !x.ready && ' (unsupported)' : ''}
              {loading && x.name === connector?.name && 'Loading...'}
            </span>
          </button>
        )
      })}
      {error?.message ? (
        <div className="flex items-center py-2 text-red-500">
          {error?.message ?? 'Failed to connect'}
        </div>
      ) : null}
    </div>
  )
}

export default WalletSelector
