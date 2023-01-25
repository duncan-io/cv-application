import React from "react";

const GeneralInfoSubmission = (props) => {


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
                    <label htmlFor="email">From:</label>
                    <input type="text" id="email"></input>
                </div>
                <div className="field">
                    <label htmlFor="phoneNumber">To:</label>
                    <input type="number" id="phoneNumber"></input>
                </div>
                </div>
                <button>Add Education</button>
            </form>
                
               
        </div>

    )
}

export default GeneralInfoSubmission;