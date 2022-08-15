import React from "react";
import { Link } from "react-router-dom";

const Author = ({ author }) => {
  return (
    <Link to={`author/${author}`}>
      <p className="author">Posted by: {`u/${author}`}</p>
    </Link>
  );
};

export default Author;
