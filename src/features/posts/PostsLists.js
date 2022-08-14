import React from "react";
import { useSelector } from "react-redux";
import { selectPosts, selectPostsStatus } from "./postsSlice";

import PostContainer from "./PostContainer";

const PostsLists = () => {
  const status = useSelector(selectPostsStatus);
  const postData = useSelector(selectPosts);
  console.log({ status });
  if (status === "succeeded") {
    return postData.map((post) => {
      let data = post.data;
      let { subreddit, title, author, created } = data;
      return (
        <PostContainer
          key={data.id}
          {...{ subreddit, title, author, created }}
        />
      );
    });
  }

  return;
  <>Loading...</>;
};

export default PostsLists;
