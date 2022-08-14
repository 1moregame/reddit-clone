import React from "react";

const PostHeader = ({ subreddit, author, created }) => {
  return (
    <>
      <p className="post-header">{`r/${subreddit} ${author} ${new Date(
        created * 1000
      )}`}</p>
      
    </>
  );
};

export default PostHeader;
