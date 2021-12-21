import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { withRouter, Link, useHistory } from "react-router-dom";
import { db, auth } from "../firebase";

function ProfileReg() {
  const [profile, setProfile] = useState({
    userId: "",
    firstname: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    country: "",
    sex: "",
    bio: " ",
  });
  const history = useHistory();
  const handleProfileReg = async (e) => {
    e.preventDefault();
    const userId = auth.currentUser.uid;
    const collectionRef = collection(db, "user_profiles");
    const payload = {
      userId: userId,
      firstname: profile.firstname,
      lastName: profile.lastName,
      age: profile.age,
      phoneNumber: profile.phoneNumber,
      country: profile.country,
      sex: profile.sex,
      bio: profile.bio,
    };
    await addDoc(collectionRef, payload);
    history.push("/userprofile");
  };
  return (
    <div className="register_container">
      <div className="register_container_form">
        <form onSubmit={handleProfileReg}>
          <div className="user-box">
            <input
              onChange={(e) =>
                setProfile({ ...profile, firstname: e.target.value })
              }
              required
              name="first name"
              type="text"
            />
            <label>First name</label>
          </div>
          <div className="user-box">
            <input
              onChange={(e) =>
                setProfile({ ...profile, lastName: e.target.value })
              }
              required
              name="last name"
              type="text"
            />
            <label>Last Name</label>
          </div>

          <div className="user-box">
            <input
              onChange={(e) => setProfile({ ...profile, age: e.target.value })}
              required
              name="age"
              type="date"
            />
            <label>Age</label>
          </div>
          <div className="user-box">
            <input
              onChange={(e) =>
                setProfile({ ...profile, phoneNumber: e.target.value })
              }
              required
              name="country"
              type="tel"
            />
            <label>Phone Number</label>
          </div>
          <div className="user-box">
            <input
              onChange={(e) =>
                setProfile({ ...profile, country: e.target.value })
              }
              required
              name="country"
              type="name"
            />
            <label>Country</label>
          </div>
          <div className="user-box_gender">
            <label>
              <input
                onChange={(e) =>
                  setProfile({ ...profile, sex: e.target.value })
                }
                name="gender"
                type="radio"
                value="Male"
              />
              Male
            </label>
            <label>
              <input
                onChange={(e) =>
                  setProfile({ ...profile, sex: e.target.value })
                }
                name="gender"
                type="radio"
                value="Female"
              />
              Female
            </label>
            <label>
              <input
                onChange={(e) =>
                  setProfile({ ...profile, sex: e.target.value })
                }
                name="gender"
                type="radio"
                value="other"
              />
              other
            </label>
          </div>

          <div className="user-box">
            <textarea
              cols="100%"
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              name="Bio"
            />
            <label>Biography</label>
          </div>
          <button>Finish</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(ProfileReg);
