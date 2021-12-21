import { React, useState, useEffect } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
function UserReg() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const history = useHistory();
  const handleReg = async (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;
    const confirmPassword = user.confirmPassword;
    if (password === confirmPassword) {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push("/profilereg");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="signup_container">
      <div className="signup_container_form">
        <h2>Register</h2>
        <form onSubmit={handleReg}>
          <div className="user-box">
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              name="name"
              type="email"
            />
            <label>email</label>
          </div>
          <div className="user-box">
            <input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              name="name"
              type="password"
            />
            <label>password</label>
          </div>
          <div className="user-box">
            <input
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              name="name"
              type="password"
            />
            <label>confirm password</label>
          </div>

          <button type="submit">Submit</button>
          <a href="/">login</a>
        </form>
      </div>
    </div>
  );
}

export default UserReg;
