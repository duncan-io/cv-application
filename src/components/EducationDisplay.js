import React from "react";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

const EducationDisplay = (props) => {
  const { education } = props;

  return (
    <div className="infoDisplay hardSkills">
      <ul>
        {education.map((item) => {
          const correctStart = parseISO(item.dateStarted)
          const correctEnd = parseISO(item.dateEnded)
          return (
            <div className="educationItem">
              <div className="educationTitle">
                <h4>{item.schoolName} </h4>
                <h5><em>{item.areaOfStudy}</em></h5>
              </div>
              <div className="dateDisplay">
                <p>{format(new Date(correctStart), 'MM/dd/yyyy')} - {format(new Date(correctEnd), 'MM/dd/yyyy')}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default EducationDisplay;
