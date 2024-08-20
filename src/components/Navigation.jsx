import React from "react"
import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../config/config"

const Navigation = () => {
  let { pathname } = useLocation()

  return (
    <nav className="navigation">
      <ul className="navigation_list">
        <li>
          <Link
            to={ROUTES.HOME}
            className={`
              navigation_list_link
              ${pathname === ROUTES.HOME ? 'active' : ''}
            `}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.WATCH_LIST}
            className={`
              navigation_list_link
              ${pathname === ROUTES.WATCH_LIST ? 'active' : ''}
            `}
          >
            My Watch List
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.CHARACTERS}
            className={`
              navigation_list_link
              ${pathname === ROUTES.CHARACTERS ? 'active' : ''}
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
