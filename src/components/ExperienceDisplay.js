import React from "react";

const ExperienceDisplay = (props) => {
  const { companyName, title, dateStarted, dateEnded } = props;

  return (
    <div className="infoDisplay">
      <h3>{companyName} </h3>
      <h3>{title}</h3>
      <div className="dateDisplay">
      <h3>{dateStarted}</h3>
      <h3>{dateEnded}</h3>
      </div>
      
    </div>
  );
};

export default ExperienceDisplay;