import React from "react";
import Search from "./Search";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>tidder</h1>
      <Search />
    </div>
  );
};

export default Header;
