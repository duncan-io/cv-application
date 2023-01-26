import React from "react";

const ExperienceSubmission = (props) => {
  return (
    <div>
      <form className="experience submissionForm">
        <div className="fieldContainer">
          <div className="field">
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" id="companyName"></input>
          </div>
          <div className="field">
            <label htmlFor="positionTitle">Position:</label>
            <input type="text" id="positionTitle"></input>
          </div>
        </div>
        <div className="fieldContainer">
          <div className="field">
            <label htmlFor="dateStarted">From:</label>
            <input type="text" id="dateStarted"></input>
          </div>
          <div className="field">
            <label htmlFor="dateEnded">To:</label>
            <input type="text" id="dateEnded"></input>
          </div>
        </div>
        <div className="fieldContainer">
          <div className="field">
            <label htmlFor="mainDuties">Main Duties:</label>
            <input type="text" id="mainDuties"></input>
          </div>
        </div>
        <button>Add Work Experience</button>
      </form>
    </div>
  );
};

export default ExperienceSubmission;
