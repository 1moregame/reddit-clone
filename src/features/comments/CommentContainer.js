import React from "react";
import "./commentContainer.css";
import CommentHeader from "./CommentHeader";

const CommentContainer = ({ commentId }) => {
  return (
    <article className="comment-container">
      <CommentHeader commentId={commentId} />
    </article>
  );
};

export default CommentContainer;
