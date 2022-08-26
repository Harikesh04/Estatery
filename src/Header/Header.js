import React from "react";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import "./Header.css"

const Header = () => {
  return (
    <div className="headercontainer">
      <div className="headerlogo">
        <h1><BsFillHouseFill/> Estatery</h1>
      </div>
      
      <div className="midheader">
        <Link className="navlinks" to="/" >
          Rent
        </Link>
        <Link className="navlinks" to="/buy" >
          Buy
        </Link>
        <Link className="navlinks" to="/sell" >
          Sell
        </Link>
        <Link className="navlinks" to="/products" >
          Manage Products
        </Link>
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
