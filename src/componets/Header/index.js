import React, { useContext } from "react";
import {
  Nav,
  Menu,
  MenuItem,
  Active,
  NavContainer,
} from "../../styles/Compoments/Header";
import { Link } from "react-router-dom";
import Context from "../../Context/index";
function Header() {
  const {favorites,cart} = useContext(Context);
  return (
    <NavContainer>
      <Nav>
        <label htmlFor="toggle">&#9776;</label>
        <input type="checkbox" id="toggle"></input>
        <Menu className="menu">
          <Link to="/">
            <MenuItem>
              <Active>Home</Active>
            </MenuItem>
          </Link>
          <Link to="/cart">
            {" "}
            <MenuItem>Cart({cart.length})</MenuItem>{" "}
          </Link>
          <Link to="/favorite">
            {" "}
            <MenuItem>Favorite({favorites.length})</MenuItem>{" "}
          </Link>
          <Link to="/category">
            {" "}
            <MenuItem>Category</MenuItem>{" "}
          </Link>
          <Link to="/contact">
            {" "}
            <MenuItem>Contact</MenuItem>{" "}
          </Link>
        </Menu>
      </Nav>
    </NavContainer>
  );
}

export default Header;
