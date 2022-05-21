import React from "react"

const Pagination = ({ activePage, setActivePage, amountOfPages }) => {
  const handleButtonClick = (event) => setActivePage(+event.target.value)

  return (
    <div className="pagination">
      <button type="button" className="pagination_button arrow-left"/>
      {new Array(amountOfPages).fill(1).map((page, index) => (
        (
          index === 0 // first page
          || index === amountOfPages - 1 // last page
          || index === activePage - 2
          || index === activePage - 1
          || index === activePage
          || index === activePage + 1
          || index === activePage + 2
        ) && (
          <div className="pagination_button-container" key={`pagination_button_${index}`}>
            {(index === amountOfPages - 1 && activePage < amountOfPages - 3) && <p>...</p>}
            <button
              type="button"
              className={`
                pagination_button
                ${activePage === index ? 'active' : ''}
              `}
              value={index}
              onClick={handleButtonClick}
            >
              {index + 1}
            </button>
            {(index === 0 && activePage > 2) && <p>...</p>}
          </div>
        )
      ))}
      <button type="button" className="pagination_button arrow-right"/>
    </div>
  )
}

export default Pagination
