import { IconButton } from '@material-ui/core'
import { Person, Forum } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
            <IconButton>
                <Person fontSize="large" className="header__icon" />
            </IconButton>
            </Link>
            <Link to="/">
                <img className="header__logo" src="https://cdn.worldvectorlogo.com/logos/tinder-icon.svg" alt="header" />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <Forum fontSize="large" className="header__icon" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
