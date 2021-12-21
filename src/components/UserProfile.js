import React, { useState, useEffect } from "react";
import { collection, where, getDocs, query } from "firebase/firestore";
import { auth, db } from "../firebase";
import { withRouter, useHistory, Link } from "react-router-dom";
import Post from "./Post";
import profilePic from "../Profile-PNG-Clipart.png";
import coverPic from "../cover-photo.png";
function UserProfile() {
  const [profile, setProfile] = useState([]);
  const history = useHistory();
  const [authUser, setAuthUser] = useState(false);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await auth.signOut();
      history.push("/");
    } catch {
      console.error("Failed to logout");
    }
  };

  const getProfile = async () => {
    const collectionRef = collection(db, "user_profiles");
    const q = query(collectionRef, where("userId", "==", auth.currentUser.uid));
    const snapshot = await getDocs(q);
    setProfile(snapshot.docs.map((doc) => ({ ...doc.data() })));
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="main">
      {profile.map((arr) => {
        return (
          <div className="userProfile">
            <h3>Your Profile</h3>
            <hr />
            <div className="profile_photo">
              <h3>Profile Pic</h3>
              <img src={profilePic} alt="profile pic" />
            </div>
            <div className="cover_photo">
              <h3>Cover Photo</h3>
              <img src={coverPic} alt="profile pic" />
            </div>
            <div className="Bio">
              <h3>Biography</h3>
              <p>{arr.bio}</p>
            </div>
            <div className="personal_information">
              <h3>Personal Information</h3>
              <ul style={{ listStyle: "none" }}>
                <li>
                  Name: {arr.firstname} {arr.lastName}
                </li>
                <li>Email: {auth.currentUser.email}</li>
                <li>Contact Number: {arr.phoneNumber}</li>
                <li>Country: {arr.country}</li>
              </ul>
            </div>
          </div>
        );
      })}
      <Link to="/posts">
        <button>Posts</button>
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default withRouter(UserProfile);
