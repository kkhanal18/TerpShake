import React from "react";

export default () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Terp Connector</h1>
          <p className="lead">
            Design a profile/portfolio, share posts and get help from other UMD
            students/alumni
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">
              Sign Up
            </a>
            <a href="login.html" className="btn btn-light">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
