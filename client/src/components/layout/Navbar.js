import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/profiles">
          Terps
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/posts">
          Forum
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
          {/* <i className="fas fa-user" /> */}
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" onClick={logout} to="/">
          {/* <i className="fas fa-sign-out-alt" /> */}
          {"  "}
          Logout
        </Link>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/profiles">
          Terps
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark"
      style={{ "background-color": "#e03434" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-laptop m0" /> Terp Portal
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
        >
          <span className="navbar-toggler-icon" />
        </button> */}

        <div className="navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto">
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}{" "}
          </ul>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
