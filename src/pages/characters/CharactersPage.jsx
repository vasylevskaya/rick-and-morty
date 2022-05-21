import React, { useEffect, useState } from "react"

import { getCharacters } from '../../api/api'

import CharactersFilters from "./CharactersFilters"
import CharactersTable from './CharactersTable'
import Pagination from "../../components/Pagination"

const CharactersPage = () => {
  const [initialCharacters, setInitialCharacters] = useState([])
  const [characters, setCharacters] = useState([])
  const [amountOfPages, setAmountOfPages] = useState(0)
  const [activePage, setActivePage] = useState(0)

  useEffect(() => {
    getCharacters(activePage)
    .then((resolve) => {
      setInitialCharacters(resolve.results)
      setCharacters(resolve.results)
      setAmountOfPages(resolve.info.pages)
    })
  }, [activePage])

  return (
    <div className="characters page">
      <CharactersFilters
        initialCharacters={initialCharacters}
        setCharacters={setCharacters}
      />
      {characters.length > 0 && (
        <CharactersTable characters={characters} />
      )}
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        amountOfPages={amountOfPages}
      />
    </div>
  )
}

export default CharactersPage
