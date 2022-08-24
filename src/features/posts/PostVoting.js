import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";

const PostVoting = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  console.log({ post });
  return (
    <p className="post-score">
      {new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "short",
      }).format(post.score)}
    </p>
  );
};

export default PostVoting;
