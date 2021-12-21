import React, { useState } from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";
import profilePic from "../Profile-PNG-Clipart.png";
import { BsFillHandThumbsUpFill, BsFillChatTextFill } from "react-icons/bs";
function PostBlock(props) {
  const [commentList, setCommentList] = useState(false);
  const handleCommentList = (e) => {
    e.preventDefault();
    setCommentList(!commentList);
  };
  return (
    <div className="container_content_posts_post">
      <div className="post_header">
        <img src={profilePic} alt="profile_image" />
        <span>
          <a href="#">{props.user}</a>
        </span>
      </div>
      <div className="post_paragragh">
        <p>{props.content}</p>
      </div>
      <hr />
      <div className="post_like-comment">
        <div className="post_love">
          <button>
            <BsFillHandThumbsUpFill />
            like
          </button>
        </div>
        <div className="post_comment">
          <button onClick={handleCommentList}>
            <BsFillChatTextFill />
            comment
          </button>
        </div>
      </div>
      <hr />
      <div className="comment" style={{ display: "flex" }}>
        <Comment postId={props.post} />
      </div>
      <div
        className="post_commentList"
        style={{ display: commentList ? "block" : "none" }}
      >
        <CommentList postId={props.post} />
      </div>
    </div>
  );
}

export default PostBlock;

// style={{ display: commentList ? "block" : "none" }}
