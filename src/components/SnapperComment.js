import profilePic from "../Profile-PNG-Clipart.png";
import React, { useState, useEffect } from "react";
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
function Snapper_comment(props) {
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    console.log(props.postId);
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
    <div>
      {comments.map((comment) => (
        <div className="snapper_container_comments_list_item">
          <div className="snapper_container_comments_list_item_1">
            <img src={profilePic} alt="user_image" />
          </div>
          <div className="snapper_container_comments_list_item_2">
            <div className="comment_item_2_1">
              <snap>
                <a href="#">Jonathan</a>
              </snap>
            </div>
            <div className="comment_item_2_2">
              <snap>
                <p>{comment}</p>
              </snap>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Snapper_comment;
