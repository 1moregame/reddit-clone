import React from "react";
import { useParams } from "react-router";
import CommentsList from "../comments/CommentsList";
import PostContainer from "./PostContainer";

const PostPage = () => {
  const { postId } = useParams();

  if (postId) {
    return (
      <>
        <PostContainer postId={postId} />
        <CommentsList postId={postId} />
      </>
    );
  }
};

export default PostPage;
