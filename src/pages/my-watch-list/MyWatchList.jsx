import React from "react"
import { useRecoilValue } from 'recoil'

import MyWatchListItem from './MyWatchListItem'

import { myWatchListState } from '../../recoil/atoms'

const MyWatchList = () => {
  const watchList = useRecoilValue(myWatchListState)

  return (
    <ul className="my-watch-list-page_list">
      {watchList.map((watchListItem, i) => (
        <MyWatchListItem key={`${watchListItem.text}_${i}`} watchListItem={watchListItem} />
      ))}
    </ul>
  )
}

export default MyWatchList
