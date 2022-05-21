import React from "react"

import CharactersCard from './CharactersCard'

const CharactersTable = ({ characters }) => (
  <div className="characters_table">
    {
      characters.length > 0
        ? characters.map((character, index) => (
          <CharactersCard key={`${character.name}_${index}`} character={character} />
        ))
        : <p>No characters were found</p>
    }
  </div>
)

export default CharactersTable
