import React, { useEffect } from "react";
import { selectSearch, setSearch } from "./features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import "./search.css";
import { useLocation } from "react-router";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const location = useLocation();

  useEffect(() => {
    dispatch(setSearch(""));
  }, [dispatch, location]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search"></label>
      <input
        className="search"
        name="search"
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </form>
  );
};

export default Search;
