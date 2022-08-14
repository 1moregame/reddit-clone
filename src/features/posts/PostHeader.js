import React from "react";
import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";
import Subreddit from "./Subreddit";
import TimeAgo from "./TimeAgo";
import "./postHeader.css";
const PostHeader = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  console.log({ post });
  return (
    <div className="post-header">
      <Subreddit subreddit={post.subreddit} />
      <TimeAgo epochTime={post.created} />
    </div>
  );
};

export default PostHeader;
