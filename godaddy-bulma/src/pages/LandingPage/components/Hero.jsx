import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div >
      <section class="hero is-medium has-text-centered" id="hero">
        <div class="hero-body" id="hero-body">
          <p class="title" id="title-text">
            Bring your business online with a .com or <br /> .co.uk
          </p>

          <p class="subtitle" id="price-text">
            As low as £0.99/1st year.
          </p>
          <div id="input-button-container" className="px-6">
            <div class="field has-addons">
              <div class="control is-expanded">
                <input
                  class="input"
                  type="text"
                  placeholder="Find your perfect domain"
                  id="input"
                />
              </div>
              <div class="control">
                <a class="button is-dark" id="search-button">
                  Search
                </a>
              </div>
            </div>
          </div>
          <p className="subtitle" id="small-text">
            Prices shown are for first year only. Limit 1 per customer. Other
            discounts available, see cart for final pricing.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
