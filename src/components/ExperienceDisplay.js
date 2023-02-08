import React from "react";
import format from "date-fns/format";
import { parseISO } from "date-fns";

const ExperienceDisplay = (props) => {
  const { experience } = props;


  return (
    <div className="infoDisplay hardSkills">
      <ul>
        {experience.map((item) => {
          const correctStart = parseISO(item.dateStarted)
          const correctEnd = parseISO(item.dateEnded)
        
          return (
            <div className="experienceItem">
              <div className="experienceTitle">
                <h3>{item.title}</h3>
                <h3><em>{item.companyName} </em></h3>
              </div>
              <div className="dateDisplay">
                <p>
                  {format(new Date(correctStart), "MM/dd/yyyy")} -
                  {format(new Date(correctEnd), "MM/dd/yyyy")}
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
