import { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  selectCommentsStatus,
  selectComments,
  fetchComments,
} from "./commentsSlice";
import { useDispatch } from "react-redux";
import CommentContainer from "./CommentContainer";

const CommentsList = ({ postId }) => {
  const endpoint = `comments/${postId}`;
  const dispatch = useDispatch();
  const status = useSelector(selectCommentsStatus);
  const comments = useSelector(selectComments);

  useEffect(() => {
    dispatch(fetchComments(endpoint));
  }, [endpoint]);

  if (status === "loading") {
    return <>Loading...</>;
  } else if (status === "error") {
    return <>Error...</>;
  } else if (status === "succeeded") {
    return comments.map((comment) => {
      return <CommentContainer key={comment.id} commentId={comment.id} />;
    });
  } else {
    return <p>crap</p>;
  }
};

export default CommentsList;
