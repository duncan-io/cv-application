import React from "react";

const GeneralDisplay = (props) => {
  const { firstName, lastName, email, phone } = props;

  return (
    <div className="infoDisplay generalDisplay">
      <h2>{firstName} {lastName}</h2>
      <div className="additionalInfo">
        <h4>{email}</h4>
        <h4>{phone}</h4>
      </div>
     
    </div>
  );
};

export default GeneralDisplay;
