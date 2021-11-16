import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <div class="columns is-vcentered" id="skills-columns">
        <div class="column is-6" id="left-skills-column">
          <div id="skill-box">
            <div id="skill-icon-box">
              <i class="far fa-money-bill-alt"></i>
            </div>
            <div id="skill-title-box">
              <h1>Asset Manager</h1>
            </div>
            <div id="skill-desc-box">
              <p>
                Learn how to become a treasury manager on the most popular DeFi
                protocols.
              </p>
            </div>
          </div>
          <div id="skill-box">
            <div id="skill-icon-box">
              <i class="fas fa-palette"></i>
            </div>
            <div id="skill-title-box">
              <h1>NFT Creator</h1>
            </div>
            <div id="skill-desc-box">
              <p>
                Learn how to become an NFT artist and start making money from
                your digital creations.
              </p>
            </div>
          </div>
          <div id="skill-box">
            <div id="skill-icon-box">
              <i class="fas fa-globe-americas"></i>
            </div>
            <div id="skill-title-box">
              <h1>Explorer</h1>
            </div>
            <div id="skill-desc-box">
              <p>
                Explore the depths of the crypto ecosystem and learn the
                foundations.
              </p>
            </div>
          </div>
        </div>
        <div class="column" id="right-skills-column">
        <div id="title-box">
                <h1>
                    <span>Gain skills</span> for participating in the new digital economy
                </h1>
            </div>
            <div id="desc-box">
                <p>Earn an on-chain credential which shows your mastery of new technologies.</p>
            </div>
            <div id="buttons-box">
                <button class="button" id="button-one">Explore all skills</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
