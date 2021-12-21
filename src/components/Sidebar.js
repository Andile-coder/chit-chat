import React, { useState, useEffect } from "react";
import { TiGroup } from "react-icons/ti";
import { FiSend } from "react-icons/fi";
import { FaStore, FaHistory } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import CreatePost from "./CreatePost";
import PostBlock from "./PostBlock";
import { collection, onSnapshot } from "firebase/firestore";
import { withRouter } from "react-router-dom";
import { db } from "../firebase";
import { FcStackOfPhotos } from "react-icons/fc";
import Header from "./Header";
import UserBlock from "./UserBlock";
import Snapper from "./Snapper";
import OnYourMind from "./OnYourMind";
function Sidebar() {
  const [timeline, setTimeline] = useState(false);
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

  const handleTimeline = () => {
    setTimeline(!timeline);
  };
  return (
    // change div id
    <div id="cool">
      <div className="sideBar">
        <div className="sideBar_header">
          <h3>ChitCaht kit</h3>
        </div>
        <div className="sideBar_items-box">
          <a href="#">
            <TiGroup /> Themes
          </a>
        </div>
        <div className="sideBar_navigation">
          <h3>Navigation</h3>
        </div>
        <div className="sideBar_items">
          <div className="sideBar_items-box" onClick={handleTimeline}>
            <a href="#">
              <FcStackOfPhotos /> Timeline
            </a>
          </div>
          <div
            className="sideBar_items-box"
            style={{
              display: timeline ? "flex" : "none",
              justifyContent: "space-evenly",
              color: "#757575",
            }}
          >
            <label>
              <input name="type" value="Block" type="radio" />
              Block
            </label>
            <label>
              <input name="type" value="listing" type="radio" />
              Listing
            </label>
          </div>
          <div className="sideBar_items-box">
            <a href="#">
              <FcStackOfPhotos /> Profile
            </a>
          </div>
          <div className="sideBar_items-box">
            <a href="#">
              <TiGroup /> Users
            </a>
          </div>
          <div className="sideBar_items-box">
            <a href="#">
              <FcStackOfPhotos /> Messages
            </a>
          </div>
          <div className="sideBar_items-box">
            <a href="#">
              <FcStackOfPhotos /> Logout
            </a>
          </div>
          <div className="sideBar_items-box">
            <a href="#">
              <FcStackOfPhotos /> Timeline
            </a>
          </div>
        </div>
        <hr />
        <div className="sideBar_newsFeed">
          <div className="sideBar_newsFeed_heading">
            <h3>News Feeds</h3>
          </div>
          <div className="sideBar_newsFeed-box">
            <FcStackOfPhotos />{" "}
            <p>
              <a href="#">Adrien</a> just logged in 2 min
              agohaefasvjcvghsavdchgasvcghvsadgv
            </p>
          </div>
          <div className="sideBar_newsFeed-box">
            <FcStackOfPhotos />{" "}
            <p>
              <a href="#">Adrien</a> just logged in 2 min ago
            </p>
          </div>
          <div className="sideBar_newsFeed-box">
            <FcStackOfPhotos />{" "}
            <p>
              <a href="#">Adrien</a> just logged in 2 min ago
            </p>
          </div>
        </div>
      </div>
      <Header />
      <div className="body">
        <UserBlock />
        <div className="body_posts">
          <OnYourMind />
          {posts.map((post) => {
            return (
              <Snapper content={post.text} user={post.userId} post={post.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Sidebar);
