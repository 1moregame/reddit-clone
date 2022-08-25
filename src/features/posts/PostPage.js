import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CommentsList from "../comments/CommentsList";
import PostContainer from "./PostContainer";
import { fetchComments } from "../comments/commentsSlice";
import { selectFilter } from "./postsSlice";

const PostPage = () => {
  const filter = useSelector(selectFilter);
  const { postId } = useParams();
  let endpoint = `comments/${postId}.json`;
  if (filter) {
    endpoint += `?sort=${filter}`;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments(endpoint));
  }, [postId, filter]);

  if (postId) {
    console.log(postId);
    return (
      <>
        <PostContainer postId={postId} />
        <CommentsList postId={postId} />
      </>
    );
  }
};

export default PostPage;
