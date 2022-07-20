import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import logo from '../../logo.svg'

export const NavBar: React.FC = () => {
    return (
        <div className="NavBar">
            <NavLink to="/">
                <img src={logo} className="nav-logo" alt="logo" />
            </NavLink>
            <div>
                Nav Bar
            </div>
        </div>
    )
}
