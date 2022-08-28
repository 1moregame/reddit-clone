import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchNewPosts, selectFilter } from "./features/posts/postsSlice";

import PostsLists from "./features/posts/PostsLists";

const AuthorPosts = () => {
  const filter = useSelector(selectFilter);
  const { authorId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    let endpoint = `user/${authorId}.json`;
    if (filter) {
      endpoint += `?sort=${filter}`;
    }
    dispatch(fetchNewPosts(endpoint));
  }, [authorId, dispatch, filter]);

  if (authorId) {
    return <PostsLists />;
  }
};

export default AuthorPosts;
