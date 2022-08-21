import React from "react";
import { selectCommentById } from "./commentsSlice";
import { useSelector } from "react-redux";
import TimeAgo from "../posts/TimeAgo";
import Author from "../posts/Author";

const CommentHeader = ({ commentId }) => {
  const comment = useSelector((state) => selectCommentById(state, commentId));
  return (
    <div className="comment-header">
      <Author author={comment.author} />
      <TimeAgo epochTime={comment.created} />
    </div>
  );
};

export default CommentHeader;
