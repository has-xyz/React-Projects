import React from "react";
import interviews from './interviewData';

const InterviewComp = () => {
  return (
    <div id="int-comp-container">
      <h1 className="title has-text-white has-text-centered">
        Upcoming Interviews
      </h1>
      <div className="columns">
        {interviews.map((interview) => (
          <>
        <div className="column" id="int-comp">
          <div className="columns has-text-centered">
            <div className="column">
              <div id="img-row" className="my-5">
                <figure class="image is-128x128 is-inline-block">
                  <img
                    src={interview.imgSrc}
                    alt="Placeholder image"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div id="int-info" className="my-6">
            <div className="columns mx-6 is-vcentered">
              <div className="column is-4 has-text-left">
                <p className="subtitle has-text-dark">{interview.companyName}</p>
              </div>
              <div className="column has-text-left">
                <p className="tag is-info is-light">{interview.jobTitle}</p>
              </div>
            </div>
            <div className="columns mx-6 is-vcentered">
              <div className="column is-4 has-text-left">
                <p className="subtitle has-text-dark">Salary:</p>
              </div>
              <div className="column has-text-left">
                <p className="tag is-primary is-light">{interview.salary} ~</p>
              </div>
            </div>
            <div className="columns mx-6 is-vcentered">
              <div className="column is-4 has-text-left">
                <p className="subtitle has-text-dark">Date:</p>
              </div>
              <div className="column has-text-left">
                <p className="tag is-warning is-light">{interview.date}</p>
              </div>
            </div>
            <div className="columns mx-6 is-vcentered">
              <div className="column is-4 has-text-left">
                <p className="subtitle has-text-dark">Turnout:</p>
              </div>
              <div className="column has-text-left">
                <p className="tag is-danger is-light">{interview.turnout} people</p>
              </div>
            </div>
            <a className="tag is-warning"><i class="fas fa-bell mx-2"></i>  Notify Me</a>
          </div>
          
        </div>
          </>
        ))}

      </div>
    </div>
  );
};

export default InterviewComp;
