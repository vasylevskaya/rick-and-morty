import React from 'react'

const CharactersFiltersCheckbox = ({
  filters, setFilters, filter, value,
}) => {
  const handleChange = () => {
    setFilters((prevFilters) => {
      let newValue = prevFilters[filter]
      if (newValue.includes(value)) {
        newValue = newValue.filter((filterValue) => filterValue !== value)
      } else {
        newValue = [ ...newValue, value]
      }
      return {
        ...prevFilters,
        [filter]: newValue
      }
    })
  }

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        id={`${filter}_${value}`}
        checked={!!filters[filter].find((valueFromFilters) => valueFromFilters === value)}
        onChange={handleChange}
      />
      <span className="value">{value}</span>
    </label>
  )
}

export default CharactersFiltersCheckbox
