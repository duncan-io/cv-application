import React from "react";

const EducationSubmission = ({addEducation}) => {



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
                    <input type="date" id="dateStarted"></input>
                </div>
                <div className="field">
                    <label htmlFor="dateEnded">To:</label>
                    <input type="date" id="dateEnded"></input>
                </div>
                </div>
                <button onClick={ () => addEducation({
                    edName: this.schoolName.value,
                    edStudy: this.areaofStudy.value,
                    edStarted: this.dateStarted.value,
                    edEnded: this.dateEnded.value,
                })} >Add Education</button>
            </form>
                
               
        </div>

    )
}

export default EducationSubmission;