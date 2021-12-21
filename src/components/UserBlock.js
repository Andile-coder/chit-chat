import React from "react";
import profilePic from "../Profile-PNG-Clipart.png";
import coverPic from "../cover-photo.png";
function UserBlock() {
  return (
    <div className="userBlock_container">
      <div className="userBlock_cover">
        <img src={coverPic} />
      </div>
      <div className="userBlock_profile">
        <img src={profilePic} />
        <div className="userBlock_profile-text">
          <div className="userBlock_profile-text-userName">
            <h3>Andile Masela</h3>
          </div>
          <div className="userBlock_profile-text-nav">
            <div className="userBlock_profile-text-nav-box">
              <p>Timeline</p>
            </div>
            <div className="userBlock_profile-text-nav-box">
              <p>About</p>
            </div>
            <div className="userBlock_profile-text-nav-box">
              <p>Friends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBlock;
