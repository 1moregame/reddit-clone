import Header from "./Header";
import { store } from "./app/store";
import { fetchPosts } from "./features/posts/postsSlice";
import PostsLists from "./features/posts/PostsLists";

function App() {
  return (
    
    <div className="App">
      <Header />
      <PostsLists />
    </div>
  );
}

export default App;
