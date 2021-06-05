import React from 'react'
import {Nav,Menu,MenuItem,Active,NavContainer} from '../../styles/Compoments/Header';
function Header() {
    return (
    <NavContainer>
        <Nav>
            <label htmlFor="toggle">&#9776;</label>
            <input type="checkbox" id="toggle"></input>
            <Menu className="menu">
                <MenuItem href="dfsd"><Active>Home</Active></MenuItem>
                <MenuItem href="dfsd">Category</MenuItem>
                <MenuItem href="dfsd">Basket</MenuItem>
                <MenuItem href="dfsd">Favorite</MenuItem>
                <MenuItem href="dfsd">Contact</MenuItem>
            </Menu>
        </Nav>
    </NavContainer>
    )
}

export default Header
