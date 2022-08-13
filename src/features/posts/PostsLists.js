import React from "react";
import useSelector from "@reduxjs/toolkit";
import { getPosts, getPostsStatus } from "./postsSlice";

const PostsLists = () => {
  const status = useSelector(getPostsStatus());
  const posts = useSelector(getPosts());

  return <div className="posts-list">PostsLists</div>;
};

export default PostsLists;
