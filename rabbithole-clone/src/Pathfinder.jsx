import React from "react";
import "./pathfinder.css";

const Pathfinder = () => {
  return (
    <div id="pathfinder">
      <div class="columns is-vcentered" id="pathfinder-box">
        <div class="column is-3" id="pathfinder-column-one">
          <p>Introducing</p>
          <h1>Pathfinder</h1>
        </div>
        <div class="column is-7" id="pathfinder-column-two">
          <p>
            Work for RabbitHole by writing proposals, creating artwork, or
            developing subgraphs and earn unique rewards.
          </p>
        </div>
        <div class="column" id="pathfinder-column-three">
          <button class="button" id="pathfinder-button">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Pathfinder;
