import Author from "./Author";
import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const PostFooter = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  return (
    <div className="post-footer">
      <Author author={post.author} />
      {post.kind !== "t1" && (
        <p>
          <FontAwesomeIcon icon={faComments} /> &nbsp;
          {new Intl.NumberFormat("en-US", {
            notation: "compact",
            compactDisplay: "short",
          }).format(post.num_comments)}
        </p>
      )}
    </div>
  );
};

export default PostFooter;
