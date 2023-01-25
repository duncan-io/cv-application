import React from "react";

const EducationSubmission = (props) => {


    return(
        <div>
            <form className="education submissionForm">
                <div className="fieldContainer">
                <div className="field">
                    <label htmlFor="schoolName">School Name:</label>
                    <input type="text" id="schoolName"></input>
                </div>
                <div className="field">
                    <label htmlFor="areaOfStudy">Area of Study:</label>
                    <input type="text" id="areaOfStudy"></input>
                </div>
                </div>
                <div className="fieldContainer">
                <div className="field">
                    <label htmlFor="dateStarted">From:</label>
                    <input type="text" id="dateStarted"></input>
                </div>
                <div className="field">
                    <label htmlFor="dateEnded">To:</label>
                    <input type="text" id="dateEnded"></input>
                </div>
                </div>
                <button>Add Education</button>
            </form>
                
               
        </div>

    )
}

export default EducationSubmission;