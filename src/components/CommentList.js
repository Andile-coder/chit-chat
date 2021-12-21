import React, { useState, useEffect } from "react";
import profilePic from "../Profile-PNG-Clipart.png";
import {
  collection,
  onSnapshot,
  query,
  where,
  documentId,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
function CommentList(props) {
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    const docRef = doc(db, "commentList", props.postId);
    onSnapshot(docRef, (snapshot) => {
      if (snapshot.data() !== undefined) {
        setComments(snapshot.data().comment.map((com) => com.text));
      }
    });
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <>
      {/* {comments.map((comment) => (
        <div className="comment">
          <img src={profilePic} alt="profile_image" />
          <span>
            <p>{comment}</p>
          </span>
        </div>
      ))} */}
      {}
    </>
  );
}

export default CommentList;
