import React from 'react'
import {Nav,Menu,MenuItem,Active,NavContainer} from '../../styles/Compoments/Header';
import {Link} from 'react-router-dom';
function Header() {
    return (
     <NavContainer>
        <Nav>
            <label htmlFor="toggle">&#9776;</label>
            <input type="checkbox" id="toggle"></input>
            <Menu className="menu">
                <Link to="/"><MenuItem href="dfsd"><Active>Home</Active></MenuItem></Link>
               <Link to="/cart"> <MenuItem href="dfsd">Cart</MenuItem> </Link>
               <Link to="/favorite"> <MenuItem href="dfsd">Favorite</MenuItem> </Link>
               <Link to="/category"> <MenuItem href="dfsd">Category</MenuItem> </Link>
               <Link to="/contact"> <MenuItem href="dfsd">Contact</MenuItem> </Link>
            </Menu>
        </Nav>
    </NavContainer>
    )
}

export default Header
