import React, { useEffect, useState } from "react";
import profilePic from "../Profile-PNG-Clipart.png";
import like from "../images/like.svg";
import groups from "../images/groups.png";
import emoji from "../images/emoji.png";
import video from "../images/video-icon.png";
import marketplace from "../images/marketplace-facebook.svg";
import photo from "../images/photo.png";
import { FcStackOfPhotos } from "react-icons/fc";
import {
  BsFillImageFill,
  BsEmojiLaughing,
  BsCameraVideo,
} from "react-icons/bs";
import { TiGroup } from "react-icons/ti";
import { FiSend } from "react-icons/fi";
import { FaStore, FaHistory } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import CreatePost from "./CreatePost";
import PostBlock from "./PostBlock";
import { collection, onSnapshot } from "firebase/firestore";
import { withRouter } from "react-router-dom";
import { db } from "../firebase";
function Home() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const collectionRef = collection(db, "user_posts");
    onSnapshot(collectionRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="container">
      <div className="container_info">
        <div className="container_info_items">
          <div className="container_info_items_profile">
            <img src={profilePic} alt="profile_image" />
            <span>
              <a href="#">Andile Masela</a>
            </span>
          </div>
          <div className="container_info_items_groups">
            <span style={{ display: "flex" }}>
              <a href="#">
                {" "}
                <TiGroup fontSize="3rem" />
                <p>Groups</p>{" "}
              </a>
            </span>
          </div>
          <div className="container_info_items_marketplace">
            <span style={{ display: "flex" }}>
              <a href="#">
                {" "}
                <FaStore fontSize="3rem" />
                <p>marketplace</p>{" "}
              </a>
            </span>
          </div>
          <div className="container_info_items_watch">
            <span style={{ display: "flex" }}>
              <a href="#">
                {" "}
                <MdOndemandVideo fontSize="3rem" />
                <p>Watch</p>{" "}
              </a>
            </span>
          </div>
          <div className="container_info_items_memories">
            <span style={{ display: "flex" }}>
              <a href="#">
                {" "}
                <FaHistory fontSize="3rem" />
                <p>Memories</p>{" "}
              </a>
            </span>
          </div>
        </div>
        <hr />
      </div>
      <div className="container_content">
        <div className="container_content_posts">
          <div className="container_content_posts_content">
            <div className="content_createpost">
              <CreatePost />
              <hr />
              <div className="createpost_attachments">
                <div className="live_video">
                  <span>
                    <a href="#">
                      <BsCameraVideo fontSize="2rem" /> <p>Video</p>
                    </a>
                  </span>
                </div>
                <div className="photo-video">
                  <span style={{ display: "flex" }}>
                    <a href="#">
                      {" "}
                      <BsFillImageFill fontSize="2rem" />
                      <p>Photo</p>{" "}
                    </a>
                  </span>
                </div>
                <div className="feeling-activity">
                  <span style={{ display: "flex" }}>
                    <a href="#">
                      {" "}
                      <BsEmojiLaughing fontSize="2rem" />
                      <p>Feeling/Activity</p>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Post */}
          {posts.map((post) => {
            return (
              <PostBlock
                content={post.text}
                user={post.userId}
                post={post.id}
              />
            );
          })}
        </div>
      </div>

      <div className="container_contacts">
        <div className="container_contacts_items">
          <div className="container_contacts_items_profile">
            <img src={profilePic} alt="profile_image" />
            <span>
              <a href="#">Andile Masela</a>
            </span>
          </div>
          <div className="container_contacts_items_groups">
            <img src={profilePic} alt="profile_image" />
            <span>
              <a href="#">Andile Masela</a>
            </span>
          </div>
          <div className="container_contacts_items_marketplace">
            <img src={profilePic} alt="profile_image" />
            <span>
              <a href="#">Andile Masela</a>
            </span>
          </div>
          <div className="container_contacts_items_watch">
            <img src={profilePic} alt="profile_image" />
            <span>
              <a href="#">Andile Masela</a>
            </span>
          </div>
          <div className="container_contacts_items_memories">
            <img src={profilePic} alt="profile_image" />
            <span>
              <a href="#">Andile Masela</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
