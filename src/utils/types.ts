export type NftMetaData = {
  name: string
  description: string
  owner: string
  image: string
  tokenId: string
  attributes: [{ trait_type: string; value: string }]
}
export type Asset = {
  token_id: string
  image_url: string
  permalink: string
  asset_contract: { address: string }
  background_color?: string
  name?: string
  collection?: {
    image_url: string
    name: string
  }
  owner: {
    address: string
  }
  traits: Trait[]
}

type Trait = {
  trait_type: string
  value: string
}
