import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto flex-row">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            Terps
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/posts">
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-user" />
            <span className="hide-sm"> Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={logout} to="/">
            <i className="fas fa-sign-out-alt" />
            {"  "}
            <span className="hide-sm">Logout</span>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
  const guestLinks = (
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto flex-row">
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
      </ul>
    </div>
  );

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark"
      style={{ "background-color": "#e03a3d" }}
    >
      <h1 className="navbar navbar-dark">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-laptop" /> Terp Portal
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
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
