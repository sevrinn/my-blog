import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const navStyle = 'p-3 mb-10'
  const navUlStyle = 'flex justify-end'
  const navLiStyle =
    'transition duration-300 ease-in-out hover:scale-110 hover:bg-sevBlue hover:text-sevGrey mr-3 p-3 border-2 border-sevBlue rounded-md text-sevBlue text-xl'

  return (
    <nav className={navStyle}>
      <ul className={navUlStyle}>
        <li className={navLiStyle}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className={navLiStyle}>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className={navLiStyle}>
          <NavLink to='/articles-list'>Entries</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
