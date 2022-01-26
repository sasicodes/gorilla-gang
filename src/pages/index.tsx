import Card from '@components/Card'
import Header from '@components/Header'
import shortenAddress from '@utils/helpers/shortenAddress'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Header />
      <div className="px-5 w-full gap-5 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:w-1/4 overflow-x-hidden">
          <div className="bg-gray-800 p-4 rounded-lg space-y-4">
            <div className="uppercase text-xs font-semibold">Contract</div>
            <a
              className="text-sm font-mono truncate"
              target="_blank"
              rel="noreferrer"
              href="https://etherscan.io/address/0xCa21d4228cDCc68D4e23807E5e370C07577Dd152"
            >
              {shortenAddress('0xCa21d4228cDCc68D4e23807E5e370C07577Dd152', 15)}
            </a>
            <button className="w-full hover:bg-gray-700 flex items-center justify-center px-4 py-3 overflow-hidden  border-2 border-transparent outline-none rounded-lg border-gray-700">
              Mint
            </button>
          </div>
        </div>
        <div className="grid gap-4 lg:w-3/4 md:grid-cols-3 lg:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
