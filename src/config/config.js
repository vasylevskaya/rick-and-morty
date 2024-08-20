export const allowedValues = {
  species: ['Human', 'Alien', 'Other'],
  status: ['Alive', 'Dead', 'unknown'],
  gender: ['Female', 'Male', 'Genderless', 'unknown']
}

export const initialCharacterFilters = {
  species: [],
  status: [],
  gender: []
}

const BASE_URL = '/rick-and-morty'

export const ROUTES = {
  HOME: `${BASE_URL}/`,
  CHARACTERS: `${BASE_URL}/characters`,
  WATCH_LIST: `${BASE_URL}/my-watch-list`
}