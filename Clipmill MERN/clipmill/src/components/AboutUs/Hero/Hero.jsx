import React, {useState} from "react";
import TeamTab from "./TeamTab/TeamTab";
import AboutTab from "./AboutTab/AboutTab";

export default function Hero() {
  const [displayPane, setDisplayPane] = useState(1)

  return (
    <div>
      <section className="hero is-dark">
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title">Who are we?</h1>
          </div>
        </div>
        <div className="tabs is-boxed is-centered main-menu" id="nav">
          <ul>
            <li data-target="pane-1" id="1" className={displayPane === 1 ? "active" : ''} >
              <a onClick={() => setDisplayPane(1)} >
                <span className="icon is-small">
                  <i className="fab fa-superpowers"></i>
                </span>
                <span>Team</span>
              </a>
            </li>
            <li data-target="pane-2" id="2" className={displayPane === 2 ? "active" : ''}>
              <a onClick={() => setDisplayPane(2)}>
                <span className="icon is-small">
                  <i className="fas fa-question"></i>
                </span>
                <span>About us</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="tab-content" style={{paddingLeft: 0, paddingRight: 0}}>
            <TeamTab id='1' displayPane={displayPane === 1 ? true : false}/>
            <AboutTab id='2' displayPane={displayPane === 2 ? true : false}/>
        </div>
      </section>
    </div>
  );
}
