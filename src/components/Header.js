import React from "react";
import profilePic from "../Profile-PNG-Clipart.png";
import { FcStackOfPhotos } from "react-icons/fc";
function Header() {
  return (
    <div className="header">
      <div className="header_mail">
        <FcStackOfPhotos fontSize="3rem" />
      </div>
      <div className="header_user">
        <img src={profilePic} alt="profile_image" />
        <span>
          <a href="#">
            <p>AndileMasela</p>
          </a>
        </span>
      </div>
      <div className="header_search">
        <FcStackOfPhotos fontSize="3rem" />
        <span>
          <a href="#">
            <input placeholder="search for a friend" />
          </a>
        </span>
      </div>
      <div className="header_message">
        <a href="#">
          <FcStackOfPhotos fontSize="3rem" />
        </a>
      </div>
    </div>
  );
}

export default Header;
