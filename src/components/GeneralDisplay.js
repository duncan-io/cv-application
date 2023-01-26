import React from "react";

const GeneralDisplay = (props) => {
  const { firstName, lastName, email, phone } = props;

  return (
    <div className="infoDisplay">
      <h2>My name is: {firstName} {lastName}</h2>
      <h3>{email}</h3>
      <h3>{phone}</h3>
    </div>
  );
};

export default GeneralDisplay;
