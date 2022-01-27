import shortenAddress from '@utils/helpers/shortenAddress'
import { useState } from 'react'
import { useAccount, useNetwork } from 'wagmi'

import WalletModal from './WalletModal'

const Header = () => {
  const [showWalletModal, setShowWalletModal] = useState(false)
  const [{ data: network }, switchNetwork] = useNetwork()

  const [{ data: accountData }] = useAccount({
    fetchEns: true
  })

  return (
    <header className="sticky top-0 font-mono left-0 right-0 z-10 flex items-center justify-between px-5 py-4 bg-opacity-50 backdrop-filter backdrop-blur">
      <WalletModal
        show={showWalletModal}
        onClose={() => setShowWalletModal(false)}
      />
      <div className="flex items-center space-x-2 text-xl ">
        <span className="text-xl">Gorilla 🦍 Gang</span>
      </div>
      <div className="flex">
        <button
          onClick={() =>
            network.chain?.unsupported && switchNetwork
              ? switchNetwork(4)
              : setShowWalletModal(true)
          }
          className="flex space-x-2 hover:bg-gray-700 items-center justify-center px-4 py-1.5 overflow-hidden  border-2 border-transparent outline-none rounded-lg border-gray-700"
        >
          <div>
            {accountData?.address ? (
              <span>
                {accountData?.ens?.name || shortenAddress(accountData?.address)}
              </span>
            ) : (
              'Connect Wallet'
            )}
          </div>
          {accountData?.ens?.avatar && (
            <img
              className="w-6 h-6 rounded-full"
              src={accountData.ens.avatar}
              alt=""
            />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
