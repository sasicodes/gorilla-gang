import React, { useEffect, useState } from 'react'
import { useContract, useContractEvent, useSigner } from 'wagmi'

import ContractMetaData from '../../artifacts/contracts/GOG.sol/GOG.json'
import Card from './Card'

const MintedList = () => {
  const [mintedItems, setMintedItems] = useState([])
  const [{ data: signerData }] = useSigner()

  const contract = useContract({
    addressOrName: '0xf310282af8F4cca4633A3e1eC99Fa1bC83c94A7c',
    contractInterface: ContractMetaData.abi,
    signerOrProvider: signerData
  })
  console.log(
    '🚀 ~ file: MintedList.tsx ~ line 16 ~ MintedList ~ contract',
    contract
  )

  const getMintedItems = () => {}

  useEffect(() => {
    getMintedItems()
  }, [])

  useContractEvent(
    {
      addressOrName: '0xf310282af8F4cca4633A3e1eC99Fa1bC83c94A7c',
      contractInterface: ContractMetaData.abi
    },
    'GorillaMinted',
    (event) => console.log('---', event)
  )

  return (
    <div className="grid gap-4 lg:w-3/4 md:grid-cols-3 lg:grid-cols-4">
      {mintedItems.map((item, idx) => (
        <Card key={idx} />
      ))}
    </div>
  )
}

export default MintedList
