import React from "react";

const EducationDisplay = (props) => {
  const { education } = props;

  return (
    <div className="infoDisplay">
      <ul>
        {education.map((item) => {
          return (
            <li>
              <h3>{item.schoolName} </h3>
              <h3>{item.areaOfStudy}</h3>
              <div className="dateDisplay">
                <h3>{item.dateStarted}</h3>
                <h3>{item.dateEnded}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EducationDisplay;
