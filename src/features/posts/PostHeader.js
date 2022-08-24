import React from "react";
import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";
import Subreddit from "./Subreddit";
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";

const PostHeader = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  return (
    <div className="post-header">
      {post.kind === "t3" && <Subreddit subreddit={post.subreddit} />}
      {post.kind === "t1" && (
        <p className="comment-location">
          Comment in <Link to={`/post/${postId}`}>{post.link_title}</Link>
        </p>
      )}
      <TimeAgo epochTime={post.created} />
    </div>
  );
};

export default PostHeader;
