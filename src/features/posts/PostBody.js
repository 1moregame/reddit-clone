import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { selectPostById } from "./postsSlice";

const PostBody = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  const location = useLocation();

  if (post.post_hint) {
    switch (post.post_hint) {
      case "image":
        return <img className="post-image" alt={post.id} src={post.url} />;
      case "rich:video":
        return (
          <video
            className="post-video"
            src={post.preview?.reddit_video_preview?.fallback_url}
            autoPlay
            loop
            controls
            preload="auto"
            type="video/mp4"
          />
        );
      case "hosted:video":
        return (
          <video
            className="post-video"
            src={post.media?.reddit_video.fallback_url}
            autoPlay
            loop
            controls
            preload="auto"
            type="video/mp4"
          />
        );
      case "link":
        return (
          <a
            className="media-link"
            href={post.url}
            target="_blank"
            rel="noreferrer"
          >
            {post.url.slice(0, 25)}...
          </a>
        );
      default:
        return <></>;
    }
  } else if (post.is_gallery === true) {
    return (
      <img
        className="post-image"
        src={`https://i.redd.it/${post.gallery_data.items[0].media_id}.jpg`}
      />
    );
  } else if (post.kind === "t1") {
    return <p className="comment-body">{post.body}</p>;
  } else if (location.pathname !== "/") {
    return <p>{post.selftext}</p>;
  } else {
    <></>;
  }
};

export default PostBody;
