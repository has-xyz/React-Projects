import React, { useEffect, useState } from "react";
import "./profile.css";
import LoggedInNavbar from "./LoggedInNavbar";
import Navbar from "./Navbar";
import interviews from "./interviewData";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  const [tab, setTab] = useState("about");
  const [bookmarked, setBookmarked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // if (!loggedIn) history.push("/");
  });

  return (
    <>
      <div className="container my-6">
        <div className="columns">
          <div className="column is-3 mx-3" id="left-column">
            <div id="profile-image-box" className="has-text-centered">
              <figure class="image is-inline-block">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAswEMzMeRpvRdPbUwjKZ1-HFX0N5xz1MdxA&usqp=CAU" />
              </figure>
            </div>
            <div id="work-box" className="my-3">
              <div className="columns is-vcentered">
                <div className="column is-3">
                  <p className="subtitle">Work</p>
                </div>
                <div className="column has-text-left">
                  <hr />
                </div>
              </div>
            </div>
            <div id="work-box-examples">
              <div className="columns is-vcentered">
                <div className="column is-8">
                  <h1 className="title">Spotify New York</h1>
                </div>
                <div className="column has-text-right">
                  <p className="tag is-link is-light">Primary</p>
                </div>
              </div>
              <p className="subtitle">2012 - 2019</p>
            </div>
            <div id="work-box-examples" className="my-4">
              <div className="columns is-vcentered">
                <div className="column is-7">
                  <h1 className="title">Facebook</h1>
                </div>
                <div className="column has-text-right">
                  <p className="tag is-warning is-light">Secondary</p>
                </div>
              </div>
              <p className="subtitle">2012 - 2019</p>
            </div>
            <div className="columns is-vcentered">
              <div className="column is-3">
                <p className="subtitle">Skills</p>
              </div>
              <div className="column has-text-left">
                <hr />
              </div>
            </div>
            <div id="skills-box">
              <div className="columns">
                <div className="column">
                  <p className="tag is-warning is-light">Javascript</p>
                  <p className="tag is-danger is-light my-2">Angular</p>
                </div>

                <div className="column mx-5">
                  <p className="tag is-link is-light">React</p>
                  <p className="tag is-dark is-light my-2">Solidity</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column" id="right-column">
            <div id="info-box" className="my-5 mx-5">
              <div className="columns is-vcentered">
                <div className="column is-8">
                  <div className="columns is-vcentered">
                    <div className="column is-5 is-inline-block">
                      <h1 className="title" id="name">
                        Hasan Elmi
                      </h1>
                      <p className="subtitle">London, England</p>
                    </div>
                    <div className="column has-text-left">
                      <p className="subtitle tag is-info is-light">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="column has-text-right">
                  <a
                    className={
                      bookmarked ? "subtitle has-text-warning" : "subtitle"
                    }
                    id="bookmark"
                    onClick={() => setBookmarked(!bookmarked)}
                  >
                    {bookmarked && <i class="fas fa-bookmark mx-1"></i>}
                    {!bookmarked && <i class="far fa-bookmark mx-1"></i>}
                    Bookmark
                  </a>
                </div>
              </div>
            </div>
            <div id="about-box" className="my-5 mx-5">
              <div class="tabs">
                <ul>
                  <li
                    className={tab == "about" && "is-active"}
                    onClick={() => setTab("about")}
                  >
                    <a>About</a>
                  </li>
                  <li
                    className={tab == "cv" && "is-active"}
                    onClick={() => setTab("cv")}
                  >
                    <a>CV</a>
                  </li>
                  <li
                    className={tab == "saved" && "is-active"}
                    onClick={() => setTab("saved")}
                  >
                    <a>Saved</a>
                  </li>
                </ul>
              </div>

              {tab == "about" && (
                <>
                  <div id="about-info">
                    <p className="subtitle">Contact Information</p>
                    <div className="columns is-vcentered">
                      <div className="column is-3">
                        <p className="subtitle">Phone:</p>
                      </div>
                      <div className="column has-text-left">
                        <p className="subtitle has-text-info">
                          +44 746 3803385
                        </p>
                      </div>
                    </div>
                    <div className="columns is-vcentered">
                      <div className="column is-3">
                        <p className="subtitle">Location:</p>
                      </div>
                      <div className="column has-text-left">
                        <p className="subtitle has-text-info">
                          London, England.
                        </p>
                      </div>
                    </div>
                    <div className="columns is-vcentered">
                      <div className="column is-3">
                        <p className="subtitle">Email:</p>
                      </div>
                      <div className="column has-text-left">
                        <p className="subtitle has-text-info">
                          hasanelmi678@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="columns is-vcentered">
                      <div className="column is-3">
                        <p className="subtitle">Website/Github:</p>
                      </div>
                      <div className="column has-text-left">
                        <p className="subtitle has-text-info">
                          https://github.com/hasanelmi678
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="about-me" className="my-6">
                    <p className="subtitle">About me</p>
                    <div className="columns is-vcentered">
                      <div className="column is-3">
                        <p className="subtitle">Birthday:</p>
                      </div>
                      <div className="column has-text-left">
                        <p className="subtitle has-text-info">July 17, 1997</p>
                      </div>
                    </div>
                    <div className="columns is-vcentered">
                      <div className="column is-3">
                        <p className="subtitle">Gender:</p>
                      </div>
                      <div className="column has-text-left">
                        <p className="subtitle has-text-info">Male</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {tab == "saved" && (
                <>
                  {interviews.map((interview) => (
                    <>
                      <div className="columns mx-6 my-6" id="saved-job-comp">
                        <div className="column">
                          <div className="columns mx-3 my-3">
                            <div className="column is-4">
                              <div
                                id="profile-image-box"
                                className="has-text-centered"
                              >
                                <figure class="image is-128x128">
                                  <img src={interview.imgSrc} />
                                </figure>
                              </div>
                            </div>
                            <div className="column">
                              <div className="columns mx-6 is-vcentered">
                                <div className="column is-4 has-text-left">
                                  <p className="subtitle has-text-dark">Job:</p>
                                </div>
                                <div className="column has-text-left">
                                  <p className="tag is-link is-light">
                                    {interview.jobTitle}
                                  </p>
                                </div>
                              </div>
                              <div className="columns mx-6 is-vcentered">
                                <div className="column is-4 has-text-left">
                                  <p className="subtitle has-text-dark">
                                    Salary:
                                  </p>
                                </div>
                                <div className="column has-text-left">
                                  <p className="tag is-primary is-light">
                                    {interview.salary} ~
                                  </p>
                                </div>
                              </div>
                              <div className="columns mx-6 is-vcentered">
                                <div className="column is-4 has-text-left">
                                  <p className="subtitle has-text-dark">
                                    Date:
                                  </p>
                                </div>
                                <div className="column has-text-left">
                                  <p className="tag is-warning is-light">
                                    {interview.date}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
