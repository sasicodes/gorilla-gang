import shortenAddress from '@utils/helpers/shortenAddress'
import React from 'react'

const Card = () => {
  return (
    <div className="bg-gray-800 divide-y divide-gray-700 rounded-lg">
      <div className="p-4">
        <img
          className="w-32 h-32 mx-auto"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9Imd6ciIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg2Ni40NTc4IDI0LjM1NzUpIHNjYWxlKDc1LjI5MDgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcj0iMSIgY3g9IjAiIGN5PSIwJSI+PHN0b3Agb2Zmc2V0PSIxNS42MiUiIHN0b3AtY29sb3I9ImhzbCgyNTksIDczJSwgODklKSIgLz48c3RvcCBvZmZzZXQ9IjM5LjU4JSIgc3RvcC1jb2xvcj0iaHNsKDI1OSwgODElLCA3NCUpIiAvPjxzdG9wIG9mZnNldD0iNzIuOTIlIiBzdG9wLWNvbG9yPSJoc2woMzA0LCA5MSUsIDU0JSkiIC8+PHN0b3Agb2Zmc2V0PSI5MC42MyUiIHN0b3AtY29sb3I9ImhzbCgzMDgsIDk2JSwgNDYlKSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9ImhzbCgzMDgsIDk2JSwgNDUlKSIgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LDUpIj48cGF0aCBkPSJNMTAwIDUwQzEwMCAyMi4zODU4IDc3LjYxNDIgMCA1MCAwQzIyLjM4NTggMCAwIDIyLjM4NTggMCA1MEMwIDc3LjYxNDIgMjIuMzg1OCAxMDAgNTAgMTAwQzc3LjYxNDIgMTAwIDEwMCA3Ny42MTQyIDEwMCA1MFoiIGZpbGw9InVybCgjZ3pyKSIgLz48cGF0aCBzdHJva2U9InJnYmEoMCwwLDAsMC4wNzUpIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNNTAsMC41YzI3LjMsMCw0OS41LDIyLjIsNDkuNSw0OS41Uzc3LjMsOTkuNSw1MCw5OS41UzAuNSw3Ny4zLDAuNSw1MFMyMi43LDAuNSw1MCwwLjV6IiAvPjwvZz48L3N2Zz4="
          alt=""
          draggable={false}
        />
      </div>
      <div className="p-2 overflow-x-hidden space-y-4">
        <div className=" p-2">
          <h1 className="font-semibold tracking-wide">Gorilla #1</h1>
          <a
            className="font-mono text-sm truncate"
            target="_blank"
            rel="noreferrer"
            href="https://etherscan.io/address/0xCa21d4228cDCc68D4e23807E5e370C07577Dd152"
          >
            {shortenAddress('0xCa21d4228cDCc68D4e23807E5e370C07577Dd152', 9)}
          </a>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-900 p-2 px-3  rounded-lg">
              <span className="block text-xs font-semibold uppercase">
                Eye Color
              </span>
              <span className="font-mono">Red</span>
            </div>
            <div className="bg-gray-900 p-2 px-3 rounded-lg">
              <span className="block text-xs font-semibold uppercase">
                Eye Color
              </span>
              <span className="font-mono">Red</span>
            </div>
            <div className="bg-gray-900 p-2 px-3 rounded-lg">
              <span className="block text-xs font-semibold uppercase">
                Eye Color
              </span>
              <span className="font-mono">Red</span>
            </div>
            <div className="bg-gray-900 p-2 px-3 rounded-lg">
              <span className="block text-xs font-semibold uppercase">
                Eye Color
              </span>
              <span className="font-mono">Red</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
