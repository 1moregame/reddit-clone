import { Link } from "react-router-dom";

const Subreddit = ({ subreddit }) => {
  return (
    <Link to={`/subreddit/${subreddit}`}>
      <p className="subreddit">{`r/${subreddit}`}</p>
    </Link>
  );
};

export default Subreddit;
