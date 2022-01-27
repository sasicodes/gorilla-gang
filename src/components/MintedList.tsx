import { Asset } from '@utils/types'
import React from 'react'

import Card from './Card'

const MintedList = ({ assets }: { assets: Asset[] }) => {
  // const [{ data: signerData }] = useSigner()
  // const contract = useContract({
  //   addressOrName: contractAddress,
  //   contractInterface: ContractMetaData.abi,
  //   signerOrProvider: signerData
  // })

  // const getMintedItems = useCallback(async () => {
  // const totalSupply = await contract.totalSupply()
  // let mintedItems: NftMetaData[] = []
  // for (
  //   let tokenIndex = 1;
  //   tokenIndex <= totalSupply.toNumber();
  //   tokenIndex++
  // ) {
  //   const tokenURI = await contract.tokenURI(tokenIndex)
  //   const jsonManifestString = atob(tokenURI.substring(29))
  //   const jsonManifest = JSON.parse(jsonManifestString)
  //   jsonManifest.tokenId = tokenIndex
  //   mintedItems.push(jsonManifest)
  // }
  // setMintedItems(mintedItems.reverse())
  // }, [contract])

  // useEffect(() => {
  //   if (contract.signer && !networkData.chain?.unsupported) getMintedItems()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [contract.signer, getMintedItems])

  return (
    <div className="grid gap-4 lg:w-3/4 md:grid-cols-3 xl:grid-cols-4">
      {assets.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </div>
  )
}

export default MintedList
