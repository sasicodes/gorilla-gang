import create from 'zustand'

import { Asset } from './types'

export interface ContextType {
  mintedItems: Asset[]
  // eslint-disable-next-line no-unused-vars
  setMintedItems: (items: Asset[]) => void
}

const useStore = create<ContextType>((set) => ({
  mintedItems: [],
  setMintedItems: (items: Asset[]) => set(() => ({ mintedItems: items }))
}))

export default useStore
