import React from "react";
import { Link ,NavLink} from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import "./Header.css"

const Header = () => {
  return (
    <div className="headercontainer">
      <div className="headerlogo">
        <h1><BsFillHouseFill/> Estatery</h1>
      </div>
      
      <div className="midheader">
        <NavLink className="navlinks" to="/rent" activeClassName="active-link">
          Rent
        </NavLink>
        <NavLink className="navlinks" to="/buy" activeClassName="active-link">
          Buy
        </NavLink>
        <NavLink className="navlinks" to="/sell" activeClassName="active-link">
          Sell
        </NavLink>
        <NavLink className="navlinks" to="/products" activeClassName="active-link">
          Manage Products
        </NavLink>
      </div>
      <div className="endheader">
      <Link className="btn" to="/">
         Login
        </Link>
      <Link className="btn" to="/">
         Sign Up
        </Link>
        
      </div>
    </div>
  );
};

export default Header;
