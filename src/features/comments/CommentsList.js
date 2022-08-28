import { useSelector } from "react-redux";
import { selectCommentsStatus, selectComments } from "./commentsSlice";
import CommentContainer from "./CommentContainer";
import { selectSearch } from "../searchSlice";

const CommentsList = () => {
  const status = useSelector(selectCommentsStatus);
  const comments = useSelector(selectComments);
  const search = useSelector(selectSearch);
  const filteredComments = comments.filter((comment) => {
    return (
      comment.title?.toLowerCase().includes(search.toLowerCase()) ||
      comment.body?.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (status === "loading") {
    return <>Loading...</>;
  } else if (status === "failed") {
    return <>Error...</>;
  } else if (status === "succeeded") {
    return filteredComments.map((comment) => {
      return <CommentContainer key={comment.id} commentId={comment.id} />;
    });
  } else {
    return <p>crap</p>;
  }
};

export default CommentsList;
