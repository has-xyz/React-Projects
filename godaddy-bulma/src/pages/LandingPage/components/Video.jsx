import React from "react";
import "./video.css";
import Video1 from './video.mp4';

const Video = () => {
  return (
    <div className="my-6">
      <div
        class="columns is-mobile is-centered has-text-centered my-6"
        
      >
        <div class="column is-half" id="video-column">
          <video controls id="video-player">
            <source src={Video1} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
