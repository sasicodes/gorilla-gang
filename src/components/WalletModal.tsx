import clsx from 'clsx'
import React from 'react'

import WalletSelector from './WalletSelector'

interface Props {
  title?: React.ReactNode
  show: boolean
  onClose: () => void
}

const WalletModal: React.FC<Props> = (props) => {
  return (
    <div
      className={clsx(
        'top-0 bottom-0 font-sans z-20 left-0 right-0 min-h-screen bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur flex flex-row items-start justify-center',
        {
          hidden: !props.show,
          absolute: props.show
        }
      )}
    >
      <div className="relative z-20 max-w-lg w-full lg:w-1/3 md:w-1/2 shadow flex flex-col mt-20 rounded-2xl items-center mx-4 bg-gray-900 lg:mt-[10%] lg:mx-0 min-h-30">
        <div className="flex items-center px-4 justify-between w-full p-3 pb-1">
          <h1 className="opacity-80">Choose your wallet</h1>
          <button
            className="flex items-center justify-center focus:outline-none rounded-lg border-gray-700"
            onClick={() => props.onClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <WalletSelector />
      </div>
    </div>
  )
}

export default WalletModal
