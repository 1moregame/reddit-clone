import React from "react";
import PostHeader from "./PostHeader";
import PostVoting from "./PostVoting";
import PostTitle from "./PostTitle";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";
import "./postContainer.css";

const PostContainer = () => {
  return (
    <div className="postContainer">
      <PostVoting />
      <div className="postContent">
        <PostHeader />
        <PostTitle />
        <PostImage />
        <PostFooter />
      </div>
    </div>
  );
};

export default PostContainer;
