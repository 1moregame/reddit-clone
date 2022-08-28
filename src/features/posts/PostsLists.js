import React from "react";
import { useSelector } from "react-redux";
import { selectPosts, selectPostsStatus } from "./postsSlice";
import { selectSearch } from "../searchSlice";
import PostContainer from "./PostContainer";

const PostsLists = () => {
  const status = useSelector(selectPostsStatus);
  const posts = useSelector(selectPosts);
  const search = useSelector(selectSearch);
  const filteredPosts = posts.filter((post) => {
    return (
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.body?.toLowerCase().includes(search.toLowerCase())
    );
  });
  if (status === "loading") {
    return <>Loading...</>;
  } else if (status === "failed") {
    return <>Error...</>;
  } else if (status === "succeeded") {
    return filteredPosts.map((post) => {
      return <PostContainer key={post.id} postId={post.id} />;
    });
  }
};

export default PostsLists;
