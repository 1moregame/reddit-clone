import Header from "./Header";
import PostContainer from "./features/posts/PostContainer";
import { store } from "./app/store";
import { fetchPosts } from "./features/posts/postsSlice";

function App() {
  return (
    <div className="App">
      <Header />
      <PostContainer />
    </div>
  );
}

export default App;
