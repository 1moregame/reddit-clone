import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNewPosts, selectFilter } from "./features/posts/postsSlice";

import PostsLists from "./features/posts/PostsLists";

const MainPosts = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    let endpoint = `${filter}.json`;
    dispatch(fetchNewPosts(endpoint));
  }, [dispatch, filter]);

  return <PostsLists />;
};

export default MainPosts;
