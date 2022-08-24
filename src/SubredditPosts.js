import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchNewPosts } from "./features/posts/postsSlice";

import PostsLists from "./features/posts/PostsLists";

const SubredditPosts = () => {
  const { subreddit } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const endpoint = `r/${subreddit}`;
    dispatch(fetchNewPosts(endpoint));
  }, []);

  if (subreddit) {
    return <PostsLists />;
  }
};

export default SubredditPosts;
