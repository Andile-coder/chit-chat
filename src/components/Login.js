import { React, useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router";
import { auth } from "../firebase";
import "../styles/dist/login.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(history.push("/userprofile"))
      .catch((error) => console.error(error));
  };
  useEffect(() => {});

  return (
    // <div className="login_container">
    //   <div className="login_container_intro">
    //     <h1>Chit Chat</h1>
    //     <p>ChitChat helps you connect and with people in your life</p>
    //   </div>
    <div className="login_container">
      <div className="login_container_form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              name="name"
              type="text"
            />
            <label> Email</label>
          </div>
          <div className="user-box">
            <input
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              name="name"
              type="password"
            />
            <label>password</label>
          </div>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>Login{" "}
          </button>
        </form>
        <a href="/signup">Create New Acount </a>
      </div>
    </div>
  );
}

export default Login;
