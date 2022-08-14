import React from "react";

const Subreddit = ({ subreddit }) => {
  return <p className="subreddit">{`r/${subreddit}`}</p>;
};

export default Subreddit;
