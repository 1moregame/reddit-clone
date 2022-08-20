import React from "react";
import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";
import Subreddit from "./Subreddit";
import TimeAgo from "./TimeAgo";

const PostHeader = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  return (
    <div className="post-header">
      {post.kind === "t3" && <Subreddit subreddit={post.subreddit} />}
      {post.kind === "t1" && <p className="comment-location">Comment in {post.link_title}</p>}
      <TimeAgo epochTime={post.created} />
    </div>
  );
};

export default PostHeader;
