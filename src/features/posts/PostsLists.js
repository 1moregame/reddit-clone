import React from "react";
import { useSelector } from "react-redux";
import { selectPosts, selectPostsStatus } from "./postsSlice";

import PostContainer from "./PostContainer";

const PostsLists = () => {
  const status = useSelector(selectPostsStatus);
  const posts = useSelector(selectPosts);
  console.log({ status });
  if (status === "succeeded") {
    return posts.map((post) => {
      let { subreddit, title, author, created } = post;
      return (
        <PostContainer
          key={post.id}
          {...{ subreddit, title, author, created }}
        />
      );
    });
  }

  return;
  <>Loading...</>;
};

export default PostsLists;
