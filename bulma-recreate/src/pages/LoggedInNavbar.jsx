import React from "react";
import "./navbar.css";
import { useHistory, Link } from "react-router-dom";
import interviews from './interviewData';

const LoggedInNavbar = ({setLoggedIn}) => {
  const history = useHistory();

  const logout = () => {
    setLoggedIn(false);
    history.push("/")
  }
  return (
    <div>
      <nav
        class="navbar my-5 mx-5"
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
            <a class="navbar-item">Home</a>

            <a class="navbar-item">View All</a>


            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Saved Interviews</a>

              <div class="navbar-dropdown">

                {interviews.map((interview) => (
                <a class="navbar-item" id="saved-interview-item">
                <div className="columns is-vcentered">
                  <div className="column">
                  <figure class="image">
                  <img
                    src={interview.imgSrc}
                    id="navbar-profile-photo"
                  />
                </figure>
                  </div>
                  <div className="column">
                    <p className="subtitle">{interview.companyName}</p>
                  </div>
                </div>
              </a>
                ))}
              </div>
            </div>
          </div>

          <div class="navbar-end">
          <Link class="navbar-item has-dropdown is-hoverable" id="profile-item" to="/profile">
          <a class="navbar-link">

              <div className="columns is-vcentered" id="profile-columns">
              <div className="column is-4">
                  <figure class="image">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAswEMzMeRpvRdPbUwjKZ1-HFX0N5xz1MdxA&usqp=CAU"
                      id="navbar-profile-photo"
                    />
                  </figure>
                </div>
                <div className="column is-8" id="profile-name">
                  <p className="subtitle">
                    Hasan Elmi
                  </p>
                </div>

              </div>
          </a>
          <div className="navbar-dropdown">
            <a className="navbar-item">My Profile</a>
            <a className="navbar-item">My Settings</a>
          </div>
            </Link>
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-dark is-outlined" id="login-button" onClick={logout}>
                  <strong>Logout</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LoggedInNavbar;
