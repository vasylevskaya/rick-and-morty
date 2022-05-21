import React from "react"
import { Link, useLocation } from "react-router-dom"

const Navigation = () => {
  let { pathname } = useLocation()

  return (
    <nav className="navigation">
      <ul className="navigation_list">
        <li>
          <Link
            to="/"
            className={`
              navigation_list_link
              ${pathname === '/' ? 'active' : ''}
            `}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/my-watch-list"
            className={`
              navigation_list_link
              ${pathname === '/my-watch-list' ? 'active' : ''}
            `}
          >
            My Watch List
          </Link>
        </li>
        <li>
          <Link
            to="/characters"
            className={`
              navigation_list_link
              ${pathname === '/characters' ? 'active' : ''}
            `}
          >
            Characters
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
