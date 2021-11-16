import React from "react";
import "./why.css";

const Why = () => {
  return (
    <div class="columns" id="why">
      <div class="column is-6" id="left-why-column">
        <div class="columns" id="which-cat-columns">
          <div class="column" id="left-cat-column">
            <h1>
              <span>for</span> Projects
            </h1>
          </div>
          <div class="column has-text-right" id="right-cat-column">
            <i class="fas fa-rocket"></i>
          </div>
        </div>
        <div id="text">
          <div id="title-box">
            <h1>
              Find your project’s <span>contributors</span>
            </h1>
          </div>
          <div id="desc-box">
            <p>
              Use RabbitHole to attract new users and stakeholders for your
              community. RabbitHole allows projects to distribute tokens to
              users through proof-of-use.
            </p>
          </div>
          <div id="buttons-box">
            <button class="button" id="button-one">
              Reach Out
            </button>
            <button class="button" id="button-two">
              More Details
            </button>
          </div>
        </div>
      </div>
      <div class="column is-6" id="right-why-column">
        <div class="columns" id="which-cat-columns">
          <div class="column" id="left-cat-column">
            <h1>
              <span>for</span> Partners
            </h1>
          </div>
          <div class="column has-text-right" id="right-cat-column">
            <i class="far fa-handshake"></i>
          </div>
        </div>
        <div id="text">
          <div id="title-box">
            <h1>
              <span>Help educate</span> new cryptocitizens
            </h1>
          </div>
          <div id="desc-box">
            <p>
              If you’re a community that’s looking to educate your members on
              crypto applications, reach out to us on discord to discuss how we
              can work together.
            </p>
          </div>
          <div id="buttons-box">
            <button class="button" id="button-one">
              Join Discord
            </button>
            <button class="button" id="button-two">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
