import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: "#F15B@A"};

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
            {" | "}
            <NavLink to="/todo" activeStyle={activeStyle}>Todo</NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </nav>
    )
};

export default Header;