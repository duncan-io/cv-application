import React from "react";

const GeneralInfoSubmission = (props) => {
    const {generalChange} = props;

    return(
        <div>
            <form className="generalInfo submissionForm">
                <div className="fieldContainer">
                <div className="field">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName"></input>
                </div>
                <div className="field">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName"></input>
                </div>
                </div>
                <div className="fieldContainer">
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email"></input>
                </div>
                <div className="field">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="number" id="phoneNumber" name="phoneNumber"></input>
                </div>
                </div>
                <button onClick={
                    generalChange({
                    firstName: "firstName".valueOf,
                    lastName: "lastName".valueOf,    
                    email: "email".valueOf,
                    phone: "phoneNumber".valueOf,
                })}>Add Info</button>
            </form>
                
               
        </div>

    )
}

export default GeneralInfoSubmission;