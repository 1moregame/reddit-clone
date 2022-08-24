import React from "react";
import Search from "./Search";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1 onClick={() => navigate("/", { state: null })} className="logo">
        tidder
      </h1>

      <Search />
    </div>
  );
};

export default Header;
