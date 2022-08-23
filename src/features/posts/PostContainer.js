import React from "react";
import PostHeader from "./PostHeader";
import PostVoting from "./PostVoting";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import { Link } from "react-router-dom";
import "./postContainer.css";

const PostContainer = ({ postId }) => {
  return (
    <article className="postContainer">
      <PostVoting postId={postId} />
      <div className="postContent">
        <PostHeader postId={postId} />
        <Link to={`/post/${postId}`}>
          <PostTitle postId={postId} />
        </Link>
        <PostBody postId={postId} />
        <PostFooter postId={postId} />
      </div>
    </article>
  );
};

export default PostContainer;
