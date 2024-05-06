import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Philip Älgebrink</h1>
            <Link to="/" className="header-link">About Me</Link>
            <Link to="/github" className="header-link">GitHub Repos</Link>
            <Link to="/games" className="header-link">Games</Link>
            <Link to="/contact" className="header-link">Contact</Link>
        </header>
    );
};

export default Header;
