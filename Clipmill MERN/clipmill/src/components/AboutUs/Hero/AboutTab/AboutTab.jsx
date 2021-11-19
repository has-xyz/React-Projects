import React from "react";

export default function AboutTab({ displayPane }) {
  return (
    <div className={displayPane ? "tab-pane is-active" : "tab-pane"} id="pane-2">
      <div className="content" id='content-box'>
        <h1>How does it work?</h1>
        <p>
          Without going into too much detail, Clipmill is a tool that uses the
          latest in Machine Learning & Computer Vision technology to create
          realistic looking videos. Customers submit their own scripts which are
          fed into the Clipmill AI to create the videos.
        </p>
        <h1>Why should I use Clipmill?</h1>
        <p>
          <li>It will add a human element that print alone options can’t.</li>
          <li>
            Videos are engaging, interactive, persuasive, entertaining and
            memorable.
          </li>
          <li>
            More likely they will buy into your brand, products/services having
            heard other client success stories.
          </li>
        </p>
        <h1>What can I do with a video testimonial?</h1>
        <p>
        <li>You can use them in presentations, as an intro for video-conference calls or as the sole media content for your advertising campaign.</li>
        <li>Video is easily adaptable and functions in many settings, from social media, live-in person or as part of a presentation.</li>

        </p>
      </div>
    </div>
  );
}
