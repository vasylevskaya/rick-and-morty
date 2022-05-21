import React from "react"

const CharactersCard = ({ character }) => (
  <div className="characters_table_card">
    <img src={character.image} alt={character.name} />
    <div className="characters_table_card_info">
      <p><b>{character.name}</b></p>
      <p>{`Species: ${character.species}`}</p>
      <p>{`Status: ${character.status}`}</p>
      <p>{`Gender: ${character.gender}`}</p>
    </div>
  </div>
)

export default CharactersCard
