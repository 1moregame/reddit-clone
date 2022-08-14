import React from "react";
import PostHeader from "./PostHeader";
import PostVoting from "./PostVoting";
import PostTitle from "./PostTitle";
import PostMedia from "./PostMedia";
import PostFooter from "./PostFooter";
import "./postContainer.css";

const PostContainer = ({ postId }) => {
  return (
    <div className="postContainer">
      <PostVoting postId={postId} />
      <div className="postContent">
        <PostHeader postId={postId} />
        <PostTitle postId={postId} />
        <PostMedia postId={postId} />
        <PostFooter postId={postId} />
      </div>
    </div>
  );
};

export default PostContainer;
