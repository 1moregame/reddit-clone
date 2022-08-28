import { useSelector } from "react-redux";

import { selectCommentsStatus, selectComments } from "./commentsSlice";

import CommentContainer from "./CommentContainer";

const CommentsList = () => {
  const status = useSelector(selectCommentsStatus);
  const comments = useSelector(selectComments);

  if (status === "loading") {
    return <>Loading...</>;
  } else if (status === "failed") {
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
