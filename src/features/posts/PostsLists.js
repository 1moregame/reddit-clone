import React from "react";
import { useSelector } from "react-redux";
import { selectPosts, selectPostsStatus } from "./postsSlice";

import PostContainer from "./PostContainer";

const PostsLists = () => {
  const status = useSelector(selectPostsStatus);
  const posts = useSelector(selectPosts);

  if (status === "succeeded") {
    return posts.map((post) => {
      return <PostContainer key={post.id} postId={post.id} />;
    });
  }

  return <>Loading...</>;
};

export default PostsLists;
