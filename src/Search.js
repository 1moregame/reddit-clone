import React from "react";
import { useState } from "react";
import './search.css'

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search"></label>
      <input
        className="search"
        name="search"
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
