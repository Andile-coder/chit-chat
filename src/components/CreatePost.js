import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { withRouter, Link, useHistory } from "react-router-dom";
import profilePic from "../Profile-PNG-Clipart.png";
function CreatePost() {
  //create a post and a comment list
  //set comment list to empty user post id as doc id of comments
  const [content, setContent] = useState({ text: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = auth.currentUser.uid;
    const text = content.text;
    const collectionRef = collection(db, "user_posts");
    const payload = {
      userId: userId,
      text: text,
    };
    //create post and comment list
    await addDoc(collectionRef, payload)
      .then(async (post) => {
        await setDoc(doc(db, "commentList", post.id), {
          comment: [{ text: "", userId: post.id }],
        });
      })
      .catch(() => alert("Error: cant create post"));
  };

  return (
    <div className="write-post">
      <a href="#">
        {" "}
        <img src={profilePic} alt="profile_image" />
      </a>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setContent({ ...content, text: e.target.value })}
          placeholder=" whats on your mind"
        />
      </form>
    </div>
  );
}

export default withRouter(CreatePost);
