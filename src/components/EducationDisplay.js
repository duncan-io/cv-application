import React from "react";

const EducationDisplay = (props) => {
  const { schoolName, areaOfStudy, dateStarted, dateEnded } = props;

  return (
    <div className="infoDisplay">
      <h3>{schoolName} </h3>
      <h3>{areaOfStudy}</h3>
      <div className="dateDisplay">
      <h3>{dateStarted}</h3>
      <h3>{dateEnded}</h3>
      </div>
      
    </div>
  );
};

export default EducationDisplay;