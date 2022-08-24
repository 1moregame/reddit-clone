import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import CommentsList from "../comments/CommentsList";
import PostContainer from "./PostContainer";
import { fetchComments } from "../comments/commentsSlice";

const PostPage = () => {
  const { postId } = useParams();
  const endpoint = `comments/${postId}`;
  console.log({ endpoint });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments(endpoint));
  }, [postId]);

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
