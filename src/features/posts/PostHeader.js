import React from "react";
import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";
import Subreddit from "./Subreddit";
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

const PostHeader = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  let commentParent = "";
  if (post.kind === "t1") {
    commentParent = post.link_id.slice(3);
  }

  return (
    <div className="post-header">
      <div className="left">
        {post.pinned && <FontAwesomeIcon icon={faThumbtack} />}
        {post.kind === "t3" && <Subreddit subreddit={post.subreddit} />}
        {post.kind === "t1" && (
          <p className="comment-location">
            Comment in{" "}
            <Link to={`/post/${commentParent}`}>{post.link_title}</Link>
          </p>
        )}
      </div>

      <TimeAgo epochTime={post.created} />
    </div>
  );
};

export default PostHeader;
