import React, { useState } from "react"
import { nanoid } from "nanoid"
import { useSetRecoilState } from 'recoil'

import { myWatchListState } from '../../recoil/atoms'

const WatchListInput = () => {
  const [query, setQuery] = useState('')

  const setMyWatchListState = useSetRecoilState(myWatchListState)

  const handleInputChange = (e) => setQuery(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query) return

    setMyWatchListState((prevState) => (
      [
        ...prevState,
        { text: query, completed: false, id: nanoid() }
      ]
    ))
    setQuery('')
  }

  return (
    <form className="my-watch-list-page_form">
      <input
        type="text"
        className="my-watch-list-page_from_input"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  )
}

export default WatchListInput
