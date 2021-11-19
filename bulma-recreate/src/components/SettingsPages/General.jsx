import React from "react";

const General = () => {
  return (
    <div className="container my-5 mx-4">
      <h1 className="title">General</h1>
      <form>
        <div className="columns">
          <div className="column">
            <div class="field">
              <label class="label is-small">First name</label>
              <p class="control">
                <input class="input" type="text" placeholder="First name" />
              </p>
            </div>
          </div>
          <div className="column mx-3">
            <div class="field">
              <label class="label is-small">Last name</label>
              <p class="control">
                <input class="input" type="text" placeholder="Last name" />
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label is-small">Location</label>
          <p class="control has-icons-left">
            <span class="select">
              <select>
                <option selected>Country</option>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
            <span class="icon is-small is-left">
              <i class="fas fa-globe"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label is-small">Profile photo</label>
          <p className="control">
            <figure class="image is-48x48 is-inline-block">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </figure>
            <div class="file is-small">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">Upload new</span>
                </span>
              </label>
            </div>
          </p>
        </div>
      </form>
    </div>
  );
};

export default General;
