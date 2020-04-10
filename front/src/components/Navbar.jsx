import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const styles = {
  navbar: {
    height: "6vh"
  },
  userStyle: {
    textAlign: "right"
  }
};
export default ({ user, onLogout }) => {
  console.log("USER: ", user);
  
  return (
    <nav
      style={styles.navbar}
      className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"
    >
      <Link to="/" className="navbar-brand">
          L I T
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
        {user ? (
          <li onClick={onLogout} className="nav-item">
            <Link to="/login" className="nav-link">
              Log-Out <span className="sr-only">(current)</span>
            </Link>
        </li>) : (
          <>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Log-In <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Sign-Up
            </Link>
          </li>
          </>
          )}
          <li className="nav-item">
              {user ? (`Welcome ${user}`) : (null)}
          </li>
        </ul>
      </div>
    </nav>
  );
};
