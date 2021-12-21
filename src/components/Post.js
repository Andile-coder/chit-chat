import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";
import PostBlock from "./PostBlock";
import Snapper from "./Snapper";
import { collection, onSnapshot } from "firebase/firestore";
import { withRouter } from "react-router-dom";
import { auth, db } from "../firebase";
function Post() {
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
    <div>
      <div className="sidebar">
        <h3>Sidebar</h3>
        <ul>
          <li>Profile</li>
          <li>My posts</li>
          <li>Logout</li>
        </ul>
      </div>
      <div
        className="create_post"
        style={{
          position: "fixed",
          color: "#fff",
          marginLeft: "20%",
          marginBottom: "20%",
        }}
      >
        <p>Create Post Here</p>
      </div>
      {posts.map((post) => {
        return (
          <Snapper content={post.text} user={post.userId} post={post.id} />
          //<PostBlock content={post.text} user={post.userId} post={post.id} />
        );
      })}
    </div>
  );
}
export default withRouter(Post);
