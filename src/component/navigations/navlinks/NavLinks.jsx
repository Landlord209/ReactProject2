import React from 'react'
import { NavLink } from 'react-router-dom'
import './navlink.css'
const NavLinks = ({too, children,icon}) => {
  return (
    <NavLink className='navlink' to={too}>
        <div>
            <span>
                {icon}
            </span>
            <span>
                {children}
            </span>
        </div>
    </NavLink>
  )
}

export default NavLinks
