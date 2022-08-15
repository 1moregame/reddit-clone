import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostTitle = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  return <h3 className="post-title">{post.title}</h3>;
};

export default PostTitle;
