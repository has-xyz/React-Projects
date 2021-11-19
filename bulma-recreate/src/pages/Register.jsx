import "./register.css";
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";


const Register = () => {
  const [error, setError] = useState(false);
  // const [userType, setUserType] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Store the user register details in a user state object
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
    companyName: "",
    location: "",
  });



  return (
    <div id="register">
      <div className="columns">
        <div className="column is-6" id="picture-column"></div>
        <div className="column" id="form-column">
          <nav
            class="navbar mx-6"
            role="navigation"
            aria-label="main navigation"
          >
            <div class="navbar-end">
              <Link class="navbar-item" to="/">
                Go back home
              </Link>
            </div>
          </nav>
          <div className="container my-4 mx-5">
            <h1 className="title">Register now</h1>
            <hr />
            <form id="register-form">
              <div className="container">
                <h1 className="title has-text-centered" id="user-type-title">
                  What type of user are you?
                </h1>
                <div className="columns my-5">
                  <div className="column">
                    <button
                      className={
                        user.userType === "e"
                          ? "button is-dark"
                          : "button is-dark is-outlined"
                      }
                      id="user-type-button"
                      type="button"
                      onClick={() => setUser({ ...user, userType: "e" })}
                    >
                      Employer{" "}
                      {user.userType === "e" && <i class="fas fa-check"></i>}
                    </button>
                  </div>
                  <div className="column">
                    <button
                      className={
                        user.userType === "u"
                          ? "button is-dark"
                          : "button is-dark is-outlined"
                      }
                      id="user-type-button"
                      type="button"
                      onClick={() => setUser({ ...user, userType: "u" })}
                    >
                      Job Seeker{" "}
                      {user.userType === "u" && <i class="fas fa-check"></i>}
                    </button>
                  </div>
                </div>
              </div>
              {error && (
                <>
                  <p className="subtitle has-text-danger" id="login-error-text">
                    <i class="fas fa-exclamation-circle"></i> Something is
                    wrong.
                  </p>
                </>
              )}
              {user.userType !== "" && (
                <>
                  {user.userType === "e" && (
                    <div class="field">
                      <label class="label is-small">Company Name</label>
                      <p class="control has-icons-left">
                        <input
                          class="input is-dark"
                          type="text"
                          placeholder="Name of the company"
                          onChange={(e) =>
                            setUser({ ...user, companyName: e.target.value })
                          }
                        />
                        <span class="icon is-small is-left my-1">
                          <i class="far fa-building"></i>{" "}
                        </span>
                      </p>
                    </div>
                  )}
                  <div className="columns">
                    <div className="column">
                      <div class="field my-2">
                        <label class="label is-small">First name</label>
                        <p class="control">
                          <input
                            class="input is-dark"
                            type="text"
                            placeholder="First name"
                            value={user.name}
                            onChange={(e) =>
                              setUser({ ...user, name: e.target.value })
                            }
                          />
                        </p>
                      </div>
                    </div>
                    <div className="column">
                      <div class="field my-2">
                        <label class="label is-small">Last name</label>
                        <p class="control">
                          <input
                            class="input is-dark"
                            type="text"
                            placeholder="Last name"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label is-small">Your location</label>
                    <p class="control has-icons-left">
                      <span class="select is-fullwidth">
                        <select
                          name="location"
                          id="location"
                          onChange={(e) =>
                            setUser({ ...user, location: e.target.value })
                          }
                        >
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
                  <div class="field">
                    <label class="label is-small">Email</label>
                    <p class="control has-icons-left">
                      <input
                        class="input is-dark"
                        type="email"
                        placeholder="Your email address"
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                      />
                      <span class="icon is-small is-left my-1">
                        <i class="fas fa-envelope"></i>
                      </span>
                    </p>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div class="field my-3">
                        <label class="label is-small">Password</label>
                        <p class="control has-icons-left">
                          <input
                            class="input"
                            type="password"
                            placeholder="Your password"
                            value={user.password}
                            onChange={(e) =>
                              setUser({ ...user, password: e.target.value })
                            }
                          />
                          <span class="icon is-small is-left my-1">
                            <i class="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="column">
                      <div class="field my-3">
                        <label class="label is-small">Confirm Password</label>
                        <p class="control has-icons-left">
                          <input
                            class="input"
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          <span class="icon is-small is-left my-1">
                            <i class="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="field">
                    <p class="control">
                      <button
                        class="button is-dark"
                        type="submit"
                        // onClick={() => setError(true)}
                      >
                        Register an account
                      </button>
                    </p>
                  </div>
                  <p className="subtitle" id="register-instead">
                    Already have an account?{" "}
                    <Link className="has-text-dark has-text-dark" to="/login">
                      login instead. <i class="fas fa-hand-point-right"></i>
                    </Link>
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
