import React from "react";

const Sidenav = ({page, setPage}) => {
  return (
    <div>
      <aside class="menu my-6">
        <h1 className="title has-text-white has-text-centered">SETTINGS</h1>
        <div id="profile-image-container" className="has-text-centered">
          <figure class="image is-128x128 is-inline-block">
            <img
              class="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
        <div id="profile-name-container" className="has-text-centered my-4">
          <p className="tag">Hasan Elmi</p>
        </div>
        <ul class="menu-list" id="sidenav-menu">
          <li>
            <a className={page === "general" && "is-selected"} onClick={() => setPage("general")}><i class="fas fa-home"></i> General</a>
          </li>
          <li>
            <a className={page === "settings" && "is-selected"} onClick={() => setPage("settings")} ><i class="fas fa-cog" ></i>Settings</a>
          </li>
          <li>
            <a className={page === "account" && "is-selected"} onClick={() => setPage("account")} ><i class="fas fa-lock-open"></i>Account</a>
          </li>
          <li>
            <a className={page === "membership" && "is-selected"} onClick={() => setPage("membership")} ><i class="fas fa-star"></i>Membership</a>
          </li>
          <li>
            <a ><i class="fas fa-sign-out-alt"></i>Logout</a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidenav;
