import React, { useState } from "react";
import "./mysettings.css";
import interviews from "./interviewData";

const MySettings = () => {
  const [selected, setSelected] = useState("account");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const submitSkill = (e) => {
    e.preventDefault();
    if (skill != "") {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };
  return (
    <div>
      <div className="columns my-6">
        <div
          className="column is-3 has-text-centered"
          id="settings-left-column"
        >
          <div id="profile-image-box" className="has-text-centered my-4">
            <figure class="image is-inline-block is-128x128">
              <img
                class="is-rounded"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAswEMzMeRpvRdPbUwjKZ1-HFX0N5xz1MdxA&usqp=CAU"
                id="profile-image"
              />
            </figure>
          </div>
          <h1 className="title">Hasan Elmi</h1>
          <div id="settings-sidenav" className="my-6">
            <aside class="menu has-text-left mx-3">
              <ul class="menu-list">
                <li className="account-item">
                  <a
                    className={selected == "account" && "is-active"}
                    onClick={() => setSelected("account")}
                  >
                    <i class="far fa-user-circle"></i> Account
                  </a>
                </li>
                <li className="account-item">
                  <a
                    className={selected == "skills" && "is-active"}
                    onClick={() => setSelected("skills")}
                  >
                    <i class="fas fa-briefcase"></i> Work & Skills
                  </a>
                </li>
                <li className="account-item">
                  <a
                    className={selected == "saved" && "is-active"}
                    onClick={() => setSelected("saved")}
                  >
                    <i class="fas fa-cloud-download-alt"></i> Saved Interviews
                  </a>
                </li>
                <li className="account-item">
                  <a
                    className={selected == "cv" && "is-active"}
                    onClick={() => setSelected("cv")}
                  >
                    {" "}
                    <i class="far fa-file-pdf"></i>CV
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>

        <div className="column mx-6" id="settings-right-column">
          {selected == "account" && (
            <>
              <h1 className="title">{selected.toLocaleUpperCase()}</h1>
              <div className="columns">
                <div className="column">
                  <label className="label is-small">First Name</label>
                  <input type="text" className="input" placeholder="Hasan" />
                </div>
                <div className="column">
                  <label className="label is-small">Last Name</label>
                  <input type="text" className="input" placeholder="Elmi" />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <label className="label is-small">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="hasanelmi678@gmail.com"
                  />
                </div>
                <div className="column">
                  <label className="label is-small">Phone Number</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="+44 746 3803385"
                  />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <label className="label is-small">
                    Job Title you are looking for
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Fullstack Developer"
                  />
                </div>
                <div className="column">
                  <label className="label is-small">Location</label>
                  <div className="field">
                    <p class="control has-icons-left">
                      <span class="select is-fullwidth">
                        <select name="location" id="location">
                          <option value={null}>Select a location</option>
                          <option value="UK">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="EU">Europe</option>
                          <option value="CA">Canada</option>
                        </select>
                      </span>
                      <span class="icon is-small is-left">
                        <i class="fas fa-globe"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <label className="label is-small">Bio</label>
                  <textarea
                    className="textarea"
                    placeholder="Add a short bio..."
                  ></textarea>
                </div>
              </div>
              <div className="buttons">
                <button className="button is-dark">Update</button>
              </div>
            </>
          )}
          {selected == "skills" && (
            <>
              <h1 className="title">Skills</h1>
              <form onSubmit={(e) => submitSkill(e)}>
                <input
                  className="input"
                  type="text"
                  placeholder="enter a skill here"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                />
                <button className="button is-link" type="submit">
                  Submit
                </button>
              </form>
              <h1 className="title my-6">My Skills</h1>
              <>
                {skills?.map((skill, i) => (
                  <p className="subtitle mx-3 tag" key={i}>
                    {skill}
                  </p>
                ))}
              </>
            </>
          )}
          {selected == "saved" && (
            <>
              <h1 className="title">Saved Interviews</h1>
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
                                <p className="subtitle has-text-dark">Date:</p>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MySettings;
