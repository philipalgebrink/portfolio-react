import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Philip Älgebrink</h1>
            <NavLink to="/" className="header-link" activeclassname="active">About Me</NavLink>
            <NavLink to="/github" className="header-link" activeclassname="active">GitHub Repos</NavLink>
            <NavLink to="/games" className="header-link" activeclassname="active">Games</NavLink>
            <NavLink to="/contact" className="header-link" activeclassname="active">Contact</NavLink>
        </header>
    );
};

export default Header;
