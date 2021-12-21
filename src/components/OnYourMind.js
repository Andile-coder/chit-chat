import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { withRouter } from "react-router-dom";
import { FcStackOfPhotos } from "react-icons/fc";
function OnYourMind() {
  //create a post and a comment list
  //set comment list to empty user post id as doc id of comments
  const [content, setContent] = useState({ text: "" });
  const handleSubmit = async (e) => {
    console.log("hello wolrd");
    e.preventDefault();
    const userId = auth.currentUser.uid;
    const text = content.text;
    const collectionRef = collection(db, "user_posts");
    const payload = {
      userId: userId,
      text: text,
    };
    //create post and comment list
    console.log(payload);
    await addDoc(collectionRef, payload)
      .then(async (post) => {
        await setDoc(doc(db, "commentList", post.id), {
          comment: [{ text: "", userId: post.id }],
        }).then(setContent({ text: "" }));
      })
      .catch(() => alert("Error: cant create post"));
  };
  return (
    <div className="createPost_container">
      <div className="createPost_container_header">
        <h3>What's New</h3>
      </div>
      <div className="createPost_container_form">
        <form onSubmit={handleSubmit}>
          <div className="form_textarea">
            <textarea
              onChange={(e) => setContent({ ...content, text: e.target.value })}
              placeholder="share your status"
              value={content.text}
            ></textarea>
          </div>
          <hr />
          <div className="post_content">
            <div className="post_content_location">
              <FcStackOfPhotos fontSize="2rem" />
            </div>
            <div className="post_content_img">
              <FcStackOfPhotos fontSize="2rem" />
            </div>
            <div className="post_content_video">
              <FcStackOfPhotos fontSize="2rem" />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(OnYourMind);
