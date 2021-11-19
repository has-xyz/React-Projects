import React from "react";
import "./tools.css";

const Tools = () => {
  return (
    <div>
      <div id="tools-container">
        <h1 className="title has-text-centered" id="tools-title-text">
          More tools to grow your business.
        </h1>
        <p className="subtitle has-text-centered" id="tools-subtitle-text">
          We’re known for domains, but check out other essentials to take your
          business further online.
        </p>
        <div className="columns">
          <div className="column">
            <div id="left-column">
              <div id="column-image">
                <figure class="image">
                  <img src="https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/All/1465fc66-8f64-450f-aba2-3d960239ae42/en-img-brand-lander-wm-free-trial.jpg" />
                </figure>
              </div>
              <div id="column-text">
                <h1 className="title has-text-left" id="column-title-text">
                  Websites + Marketing
                </h1>
                <p className="subtitle has-text-left" id="column-subtitle-text">
                  Create a professional website that'll take your business
                  further, thanks to built-in tools like SEO and email
                  marketing. Get started for free, no credit card required.
                </p>
                <button
                  className="button is-dark is-outlined"
                  id="column-button"
                >
                  Start for free
                </button>
              </div>
            </div>
          </div>
          <div className="column">
            <div id="right-column">
              <div id="column-image">
                <figure class="image">
                  <img src="https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/All/ab846ae2-31b0-47d4-9dd4-26fcf51b8d2d/en-img-brand-lander-professional-email.jpg" />
                </figure>
              </div>
              <div id="column-text">
                <h1 className="title has-text-left" id="column-title-text">
                  Professional Email
                </h1>
                <p className="subtitle has-text-left" id="column-subtitle-text">
                  Show customers you’re a pro with an email address that matches
                  your domain. Get Professional Email today.
                </p>
                <p className="subtitle has-text-left" id="column-subtitle-text">
                  As low as
                </p>
                <p className="subtitle has-text-left" id="column-subtitle-text">
                  <span id="price-text">£2.49</span> per user / mo
                </p>
                <button
                  className="button is-dark is-outlined"
                  id="column-button"
                >
                  Explore Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
