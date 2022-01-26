import { useState } from 'react'

import WalletModal from './WalletModal'

const Header = () => {
  const [showWalletModal, setShowWalletModal] = useState(false)

  return (
    <header className="sticky top-0  px-5 left-0 right-0 z-10 flex items-center justify-between py-4 bg-opacity-50 backdrop-filter backdrop-blur">
      <WalletModal
        show={showWalletModal}
        onClose={() => setShowWalletModal(false)}
      />
      <div className="flex items-center space-x-2 text-xl ">
        <span className="text-xl font-mono">Gorilla Gang</span>
      </div>
      <div className="flex">
        <button
          onClick={() => setShowWalletModal(true)}
          className="flex hover:bg-gray-700 items-center justify-center px-4 py-1.5 overflow-hidden  border-2 border-transparent outline-none rounded-lg border-gray-700"
        >
          Connect Wallet
        </button>
      </div>
    </header>
  )
}

export default Header
