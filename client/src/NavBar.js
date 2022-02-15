import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const navStyle = 'p-3 mb-10'
  const navUlStyle = 'flex justify-end'
  const navLiStyle =
    'mr-3 p-3 border-2 border-sevBlue rounded-md text-sevBlue text-xl'
  const activeStyle = 'bg-sevBlue text-sevGrey text-2xl'
  return (
    <nav className={navStyle}>
      <ul className={navUlStyle}>
        <li>
          <NavLink className={navLiStyle} activeStyle={activeStyle} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={navLiStyle} to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={navLiStyle} to='/articles-list'>
            Entries
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
