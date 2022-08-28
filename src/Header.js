import React from "react";
import Search from "./Search";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1 onClick={() => navigate("/", { state: null })} className="logo">
        tibber
      </h1>

      <Search />
    </div>
  );
};

export default Header;
