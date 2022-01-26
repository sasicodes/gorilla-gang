import Header from '@components/Header'
import MintedList from '@components/MintedList'
import ProjectDetails from '@components/ProjectDetails'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Header />
      <div className="px-5 w-full gap-5 flex flex-col lg:flex-row justify-between">
        <ProjectDetails />
        <MintedList />
      </div>
    </div>
  )
}
