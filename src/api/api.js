export const getCharacters = async (activePage = 0) => {
  const urlToFetch = `https://rickandmortyapi.com/api/character?page=${activePage}`
  let mainResult

  try {
    const data = await fetch(urlToFetch, { method: 'GET' })
    mainResult = await data.json()
  } catch (error) {
    console.error(error)
  }

  return mainResult
}
