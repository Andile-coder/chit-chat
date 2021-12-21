import React, { useState } from "react";
import { db, auth } from "../firebase";
import like from "../images/like.svg";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from "firebase/firestore";
import profilePic from "../Profile-PNG-Clipart.png";
function Comment(props) {
  const [comment, setComment] = useState({ text: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = auth.currentUser.uid;
    const text = comment.text;
    const docRef = doc(db, "commentList", props.postId);
    const payload = { text: text, userId: userId };
    await updateDoc(docRef, {
      comment: arrayUnion(payload),
    });
  };
  return (
    <div className="comment_form">
      <form onSubmit={handleSubmit}>
        <div className="form_img">
          <img src={profilePic} alt="userimg" />
        </div>
        <input
          type="text"
          onChange={(e) => {
            setComment({ ...comment, text: e.target.value });
          }}
        />
      </form>
    </div>
  );
}

export default Comment;
{
  /* <a href="#">
        {" "}
        <img src={profilePic} alt="profile_image" />
      </a>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="comment"
          onChange={(e) => {
            setComment({ ...comment, text: e.target.value });
          }}
        />
      </form> */
}
