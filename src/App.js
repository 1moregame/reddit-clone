import Layout from "./Layout";
import AuthorPosts from "./AuthorPosts";
import PostPage from "./features/posts/PostPage";
import { Routes, Route, Navigate } from "react-router-dom";

import SubredditPosts from "./SubredditPosts";

import MainPosts from "./MainPosts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPosts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="author">
          <Route path=":authorId" element={<AuthorPosts />} />
        </Route>
        <Route path="post">
          <Route path=":postId" element={<PostPage />} />
        </Route>
        <Route path="subreddit">
          <Route path=":subreddit" element={<SubredditPosts />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
