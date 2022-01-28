import useStore from '@utils/store'
import { Asset } from '@utils/types'
import React from 'react'

import Card from './Card'

const MintedList = ({ assets }: { assets: Asset[] }) => {
  const { mintedItems } = useStore((store) => store)

  return (
    <div className="grid gap-4 lg:w-3/4 md:grid-cols-3 xl:grid-cols-4">
      {[...mintedItems, ...assets].map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </div>
  )
}

export default MintedList
