import React from "react";

const ExperienceDisplay = (props) => {
  const { experience } = props;

  return (
    <div className="infoDisplay hardSkills">
      <ul>
        {experience.map((item) => {
          return (
            <li>
              <h3>{item.companyName} </h3>
              <h3>{item.title}</h3>
              <div className="dateDisplay">
                <h3>{item.dateStarted}</h3>
                <h3>{item.dateEnded}</h3>
              </div>
              <p>{item.mainDuties}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceDisplay;
