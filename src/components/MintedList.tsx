import { Asset } from '@utils/types'
import React from 'react'

import Card from './Card'

const MintedList = ({ assets }: { assets: Asset[] }) => {
  return (
    <div className="grid gap-4 lg:w-3/4 md:grid-cols-3 xl:grid-cols-4">
      {assets.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </div>
  )
}

export default MintedList
