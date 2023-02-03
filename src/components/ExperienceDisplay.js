import React from "react";
import format from "date-fns/format";

const ExperienceDisplay = (props) => {
  const { experience } = props;

  return (
    <div className="infoDisplay hardSkills">
      <ul>
        {experience.map((item) => {
          return (
            <div className="experienceItem">
              <div className="experienceTitle">
                <h3>{item.title}</h3>
                <h3><em>{item.companyName} </em></h3>
              </div>
              <div className="dateDisplay">
                <p>
                  {format(new Date(item.dateStarted), "MM/dd/yyyy")} -
                  {format(new Date(item.dateEnded), "MM/dd/yyyy")}
                </p>
              </div>
              <p>{item.mainDuties}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceDisplay;
