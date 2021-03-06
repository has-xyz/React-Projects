import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar"
        role="navigation"
        aria-label="main navigation"
        id="navbar-container"
      >
        <div class="navbar-brand" id="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start" id="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Product</a>

              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <hr class="navbar-divider" />
                <a class="navbar-item">Report an issue</a>
              </div>
            </div>
            <a class="navbar-item">Overview</a>

            <a class="navbar-item">Contact</a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary is-outlined" id="register-button">
                  Sign up
                </a>
                <a class="button is-primary" id="login-button">
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
