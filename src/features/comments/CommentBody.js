import React from "react";
import { useSelector } from "react-redux";
import { selectCommentById } from "./commentsSlice";

const CommentBody = ({ commentId }) => {
  const comment = useSelector((state) => selectCommentById(state, commentId));
  return <div className="comment-body">{comment.body}</div>;
};

export default CommentBody;
