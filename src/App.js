import Layout from "./Layout";
import PostsLists from "./features/posts/PostsLists";
import AuthorPosts from "./AuthorPosts";
import PostPage from "./features/posts/PostPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchNewPosts } from "./features/posts/postsSlice";
import { store } from "./app/store";

function App() {
  useEffect(() => {
    store.dispatch(fetchNewPosts("hot"));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsLists />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="author">
          <Route path=":authorId" element={<AuthorPosts />} />
        </Route>
        <Route path="post">
          <Route path=":postId" element={<PostPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
