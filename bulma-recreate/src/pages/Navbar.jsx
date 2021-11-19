import React from "react";
import InterviewComp from "./InterviewComp";
import "./navbar.css";
const Navbar = ({setLoggedIn}) => {
  return (
    <div>
          <nav
          class="navbar mx-5 my-5"
          role="navigation"
          aria-label="main navigation"
          id="navigation-bar"
        >
          <div class="navbar-brand mx-5">
            <a class="navbar-item">
              <h1 className="title">Live Hire</h1>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">All Interviews</a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-dark" id="register-button">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-light" id="login-button" onClick={() => setLoggedIn(true)}>
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;
