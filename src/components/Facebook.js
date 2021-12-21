import React from "react";

function Facebook() {
  return (
    <>
      <div className="textbox">
        <h1>Facebook </h1>
        <h2>
          Facebook helps you connect and share with your friends around the
          world
        </h2>
      </div>
      <div className="container">
        <div className="form">
          <input placeholder="Enter your emaile" />
          <input placeholder="Enter your emaile" />

          <button>Login</button>
          <p>
            <a href="#">forgot password?</a>
          </p>
          <hr />
          <div className="btn">
            <button>Create new Account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Facebook;
