import Header from '@components/Header'
import MintedList from '@components/MintedList'
import ProjectDetails from '@components/ProjectDetails'
import { useNetwork } from 'wagmi'

export default function Home() {
  const [{ data: networkData }] = useNetwork()
  console.log('🚀 ~ file: index.tsx ~ line 8 ~ Home ~ networkData', networkData)

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Header />
      <div className="px-5 w-full gap-5 flex flex-col lg:flex-row justify-between">
        {!networkData.chain?.unsupported && <ProjectDetails />}
        <MintedList />
      </div>
    </div>
  )
}
