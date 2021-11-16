import React from "react";
import "./hero.css";
import RabbitholeLogo from './rabbithole_logo.png';

const Hero = () => {
  return (
    <div>
      <section class="hero is-dark" id="hero-container">
        <div class="hero-head" id="navbar-container">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img
                    src={RabbitholeLogo}
                    alt="Logo"
                    id="rabbithole-logo"
                  />
                </a>
              </div>
              <div id="navbarMenuHeroB" class="navbar-menu">
                <div class="navbar-end">
                  <span class="navbar-item">
                    <a class="button" id="navbar-button">
                      Use RabbitHole
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div class="hero-body" id="hero-body">
            <div className="columns" id="hero-columns">
            <div className="column is-5" id="left-hero-column">
            <div id="title-box">
                <h1>
                    <span>Earn crypto</span> by using the latest decentralized apps.
                </h1>
            </div>
            <div id="desc-box">
                <p>Become an early adopter of new projects, and earn crypto as a reward.</p>
            </div>
            <div id="buttons-box">
                <button class="button" id="button-one">Use Rabbithole</button>
                <button class="button" id="button-two">View Opportunities</button>
            </div>
            </div>
            <div class="column" id="right-hero-column">
            <div id="image-box">
                
            </div>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
