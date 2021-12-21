import React from "react";
import profilePic from "../Profile-PNG-Clipart.png";
import { BsFillHandThumbsUpFill, BsFillChatTextFill } from "react-icons/bs";
import coverPic from "../cover-photo.png";
import { Comment } from "@babel/types";
import SnapperComment from "./SnapperComment";
function Snapper(props) {
  const arr = [1];
  return (
    <div className="snapper_container">
      <div className="snapper_container_content">
        <div className="snapper_container_content_header">
          <div className="snapper_container_content_header_items">
            <div className="snapper_container_content_header_items_1">
              <img src={profilePic} alt="user_image" />
            </div>
            <div className="snapper_container_content_header_items_2">
              <div className="header_items_2_1">
                <snap>
                  <p>{props.user}</p>
                </snap>
              </div>
              <div className="header_items_2_2">
                <snap>
                  <p>on 15th January, 2021</p>
                </snap>
              </div>
            </div>
          </div>
        </div>
        <div className="snapper_container_content_body">
          <div className="snapper_container_content_body_post">
            <div className="snapper_container_content_body_post_text">
              <p>{props.content}</p>
            </div>
            <div className="snapper_container_content_body_post_img">
              <img src={coverPic} alt="content_image" />
            </div>
          </div>
        </div>
      </div>
      <div className="snapper_container_view-comments">
        <div className="snapper_container_view-comments-box">
          <a href="#">
            <BsFillChatTextFill />
            <p>View all 10 comments</p>
          </a>
        </div>
      </div>
      <div className="snapper_container_comments">
        <div style={{ flex: 1, flexGrow: 1 }}>
          <SnapperComment postId={props.post} />
        </div>

        <div className="snapper_container_comments_post">
          <div className=" comment_form">
            <form>
              <div className="form_img">
                <img src={profilePic} alt="userimg" />
              </div>
              <input type="text" />
            </form>
          </div>
          <Comment postId={props.post} />
        </div>
      </div>
    </div>
  );
}

export default Snapper;
