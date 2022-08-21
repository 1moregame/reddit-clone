import React from "react";
import "./commentContainer.css";
import CommentBody from "./CommentBody";
import CommentHeader from "./CommentHeader";

const CommentContainer = ({ commentId }) => {
  return (
    <article className="comment-container">
      <CommentHeader commentId={commentId} />
      <CommentBody commentId={commentId} />
    </article>
  );
};

export default CommentContainer;
