import React from "react";
import Search from "./Search";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">tidder</h1>
      </Link>
      <Search />
    </div>
  );
};

export default Header;
