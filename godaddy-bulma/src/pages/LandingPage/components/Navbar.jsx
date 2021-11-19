import React, {useState} from "react";
import "./navbar.css";

const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState("");
  return (
    <div>
      <nav
        id="navbar-container"
        class="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img
              src="https://domaininvesting.com/wp-content/uploads/2020/01/GoDaddy-Black.png"
              width="112"
              height="100"
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
            <a className={selectedItem == "domain-names" ? "selected-navbar-start-item navbar-item" : "navbar-item"}  id="domain-names" onClick={() => setSelectedItem('domain-names')}>Domain Names</a>

            <a className={selectedItem == "website-stores" ? "selected-navbar-start-item navbar-item" : "navbar-item"} id="website-stores" onClick={() => setSelectedItem('website-stores')}>Website & Stores</a>
            <a className={selectedItem == "more" ? "selected-navbar-start-item navbar-item" : "navbar-item"}  id="more" onClick={() => setSelectedItem('more')}>More</a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" id="number">020 7084 1810</a>

              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <hr class="navbar-divider" />
                <a class="navbar-item">Report an issue</a>
              </div>
            </div>
            <a class="navbar-item" id="hire-an-expert">Hire an Expert</a>
            <a class="navbar-item" id="blog">Blog</a>
            <a class="navbar-item" id="help">Help</a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" id="sign-in">Sign In</a>

              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <hr class="navbar-divider" />
                <a class="navbar-item">Report an issue</a>
              </div>
            </div>
            <a class="navbar-item" id="shopping-cart"><i class="fas fa-shopping-cart"></i></a>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
