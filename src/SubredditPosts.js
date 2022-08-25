import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchNewPosts, selectFilter } from "./features/posts/postsSlice";

import PostsLists from "./features/posts/PostsLists";

const SubredditPosts = () => {
  const filter = useSelector(selectFilter);
  const { subreddit } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    let endpoint = `r/${subreddit}`;
    if (filter) {
      endpoint += `/${filter}.json`;
    }
    dispatch(fetchNewPosts(endpoint));
  }, [filter]);

  if (subreddit) {
    return <PostsLists />;
  }
};

export default SubredditPosts;
