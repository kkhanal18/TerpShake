import React from "react";

import { Link, Redirect } from "react-router-dom";

const LandingTop = () => {
  return (
    <div className="mt-3">
      <h3>Job search made easy</h3>
      <div className="col">
        <div className="row">Search for jobs</div>
        <div className="row">Setup up portfolio</div>
        <div className="row">Get help from other UMD students and alumni</div>
        <br />
      </div>
      <div>
        <Link to="/register" className="btn btn-dark">
          Sign Up
        </Link>
      </div>
      {/* <Link to="/login" className="btn btn-light">
        Login
      </Link> */}
    </div>
  );
};

export default LandingTop;
