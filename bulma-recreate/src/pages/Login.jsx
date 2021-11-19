import "./login.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";



const Login = () => {
  const [error, setError] = useState(false);
    // Store the email & password in the user state
    const [user, setUser] = useState({ email: "", password: "" });
 

  return (
    <div id="login">
      <div className="columns">
        <div className="column is-6" id="picture-column"></div>
        <div className="column" id="form-column">
          <nav class="navbar mx-6" role="navigation" aria-label="main navigation">
            <div class="navbar-end">
              <Link to="/" class="navbar-item">Go back home</Link>
            </div>
          </nav>
          <section class="hero is-medium">
            <div class="hero-body">
                <h1 className="title">Login Here</h1>
                <p className="subtitle" id="welcome-back">Welcome back and enjoy the app!</p>
              <hr />
              <form>
                {error && (
                <>
                <p className="subtitle has-text-danger" id="login-error-text"><i class="fas fa-exclamation-circle"></i> Email or password is incorrect.</p> 
                <p className="subtitle" id="reset-password-text"><a className="has-text-info">Click here if you want to reset your password <i class="fas fa-arrow-circle-right"></i></a></p>
                </>
                )}
                <div class="field">
                  <label class="label is-small">Email</label>
                  <p class="control has-icons-left">
                    <input class="input is-dark" type="email" placeholder="Your email address"               value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}/>
                    <span class="icon is-small is-left my-1">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field my-5">
                  <label class="label is-small">Password</label>
                  <p class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="Your password"
                      value={user.password}
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <span class="icon is-small is-left my-1">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field my-5">
                  <p class="control">
                    <button class="button is-dark" type="submit" onClick={() => setError(true)}>Login to your account</button>
                  </p>
                </div>
                <p className="subtitle" id="register-instead">Don't have an account yet? <Link to="/register" className="has-text-dark has-text-dark">register instead <i class="fas fa-hand-point-right"></i></Link></p>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
