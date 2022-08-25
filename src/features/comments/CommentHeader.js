import React from "react";
import { selectCommentById } from "./commentsSlice";
import { useSelector } from "react-redux";
import TimeAgo from "../posts/TimeAgo";
import Author from "../posts/Author";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

const CommentHeader = ({ commentId }) => {
  const comment = useSelector((state) => selectCommentById(state, commentId));
  return (
    <div className="comment-header">
      <div className="left">
        {comment.stickied && <FontAwesomeIcon icon={faThumbtack} />}
        <Author author={comment.author} />
      </div>
      <TimeAgo epochTime={comment.created} />
    </div>
  );
};

export default CommentHeader;
