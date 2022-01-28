import Header from '@components/Header'
import MintedList from '@components/MintedList'
import ProjectDetails from '@components/ProjectDetails'
import { Asset } from '@utils/types'
import { GetStaticProps } from 'next'

export default function Home({ assets }: { assets: Asset[] }) {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Header />
      <div className="px-5 w-full gap-5 flex flex-col lg:flex-row justify-between">
        <ProjectDetails />
        <MintedList assets={assets} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `https://testnets-api.opensea.io/api/v1/assets?offset=0&limit=20&asset_contract_address=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`
  )
  const data = await response.json()
  return {
    props: {
      assets: data.assets || []
    },
    revalidate: 60 // seconds
  }
}
