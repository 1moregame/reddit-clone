import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchNewPosts } from "./features/posts/postsSlice";

import PostsLists from "./features/posts/PostsLists";

const AuthorPosts = () => {
  const { authorId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const endpoint = `user/${authorId}`;
    dispatch(fetchNewPosts(endpoint));
  }, []);

  if (authorId) {
    return <PostsLists />;
  }
};

export default AuthorPosts;
