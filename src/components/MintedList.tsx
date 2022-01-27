import React, { useCallback, useEffect, useState } from 'react'
import { useContract, useNetwork, useSigner } from 'wagmi'

import ContractMetaData from '../../artifacts/contracts/GOG.sol/GOG.json'
import Card from './Card'
import Unsupported from './Unsupported'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string

export type NftMetaData = {
  name: string
  description: string
  owner: string
  image: string
  tokenId: string
  attributes: [{ trait_type: string; value: string }]
}

const MintedList = () => {
  const [mintedItems, setMintedItems] = useState<NftMetaData[]>([])
  const [{ data: networkData }] = useNetwork()
  const [{ data: signerData }] = useSigner()
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: ContractMetaData.abi,
    signerOrProvider: signerData
  })

  const getMintedItems = useCallback(async () => {
    const totalSupply = await contract.totalSupply()
    let mintedItems: NftMetaData[] = []
    for (
      let tokenIndex = 1;
      tokenIndex <= totalSupply.toNumber();
      tokenIndex++
    ) {
      const tokenURI = await contract.tokenURI(tokenIndex)
      const jsonManifestString = atob(tokenURI.substring(29))
      const jsonManifest = JSON.parse(jsonManifestString)
      jsonManifest.tokenId = tokenIndex
      mintedItems.push(jsonManifest)
    }
    setMintedItems(mintedItems.reverse())
  }, [contract])

  useEffect(() => {
    if (contract.signer && !networkData.chain?.unsupported) getMintedItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract.signer, getMintedItems])

  if (networkData.chain?.unsupported) return <Unsupported />

  return (
    <div className="grid gap-4 lg:w-3/4 md:grid-cols-3 xl:grid-cols-4">
      {mintedItems.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </div>
  )
}

export default MintedList
