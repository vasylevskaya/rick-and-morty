import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const myWatchListState = atom({
  key: 'myWatchList',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
