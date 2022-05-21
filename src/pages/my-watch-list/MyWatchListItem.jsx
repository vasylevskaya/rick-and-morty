import React from "react"
import { useSetRecoilState } from "recoil"

import { myWatchListState } from '../../recoil/atoms'

const MyWatchListItem = ({ watchListItem }) => {
  const setWatchList = useSetRecoilState(myWatchListState)

  const removeItem = () => {
    setWatchList((prevState) => prevState.filter((item) => item.id !== watchListItem.id))
  }

  const toggleCompleted = () => {
    setWatchList((prevState) => prevState.map((item) => (
      item.id === watchListItem.id ? { ...item, completed: !(watchListItem.completed) } : item
    )))
  }

  return (
    <li className="my-watch-list-page_list_item">
      <input type="checkbox" checked={watchListItem.completed} onChange={toggleCompleted} />
      <p>{watchListItem.text}</p>
      <button type="button" onClick={removeItem}>
        X
      </button>
    </li>
  )
}

export default MyWatchListItem
