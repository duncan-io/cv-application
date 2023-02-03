import React from "react";
import format from "date-fns/format";

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
                <p>{format(new Date(item.dateStarted), 'MM/dd/yyyy')} - {format(new Date(item.dateEnded), 'MM/dd/yyyy')}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default EducationDisplay;
