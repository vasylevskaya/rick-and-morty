import React , { useState }from "react"

import { allowedValues, initialCharacterFilters } from "../../config/config"

import CharactersFiltersCheckbox from "./CharactersFiltersCheckbox"

const CharactersFilters = ({ initialCharacters, setCharacters }) => {
  const [filters, setFilters] = useState(initialCharacterFilters)

  const applyFilters = () => {
    setCharacters(() => {
      return initialCharacters.filter((character) => (
        (!filters.status.length || filters.status.includes(character.status))
        && (!filters.gender.length || filters.gender.includes(character.gender))
        && (!filters.species.length || filters.species.includes(character.species) || (
            filters.species.includes('Other') && (
              character.species !== 'Human' && character.species !== 'Alien'
            )
          ))
      ))
    })
  }

  const removeFilters = () => {
    setFilters(initialCharacterFilters)
    setCharacters(initialCharacters)
  }

  return (
    <div className="characters_filters">
      <form className="characters_filters_inputs">
        {Object.keys(allowedValues).map((key) => (
          <div key={key} className="characters_filters_inputs_column">
            <p>{key}</p>
            {allowedValues[key].map((value) => (
              <CharactersFiltersCheckbox
                key={value}
                filters={filters}
                setFilters={setFilters}
                filter={key}
                value={value}
              />
            ))}
          </div>
        ))}
      </form>
      <div className="characters_filters_control">
        <button
          type="button"
          className="characters_filters_control_button button-apply"
          onClick={applyFilters}
        >
          Apply filters
        </button>
        <button
          type="button"
          className="characters_filters_control_button button-remove"
          onClick={removeFilters}
        >
          Remove all
        </button>
      </div>
    </div>
  )
}

export default CharactersFilters
