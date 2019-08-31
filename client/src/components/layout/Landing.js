import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LandingTop from "../landing/LandingTop";
import Features from "../landing/Features";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1> Start your career path right.</h1>
          <p>
            Search for jobs. Setup a profile to impress employers. And get help
            from UMD students and alumni.
          </p>
          <Link to="/register" className="btn btn-danger">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
