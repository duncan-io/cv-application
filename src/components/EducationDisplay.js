import React from "react";

const EducationDisplay = (props) => {
  const { education } = props;

  return (
    <div className="infoDisplay hardSkills">
      <ul>
        {education.map((item) => {
          return (
            <div className="educationItem">
              <div className="educationTitle">
                <h4>{item.schoolName} </h4>
                <h5><em>{item.areaOfStudy}</em></h5>
              </div>
              <div className="dateDisplay">
                <p>{item.dateStarted} - {item.dateEnded}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default EducationDisplay;
