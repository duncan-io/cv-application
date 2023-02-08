import React, { useState } from "react";
import EducationDisplay from "./components/EducationDisplay";
import ExperienceDisplay from "./components/ExperienceDisplay";
import GeneralDisplay from "./components/GeneralDisplay";
import "./styles/App.css";

let i = 0;

const App = () => {

  const [edObj, setEdObj] = useState(
    {
      schoolName: "",
      areaOfStudy: "",
      dateStarted: "",
      dateEnded: "",
      key: i,
    }
  );
  const [education, setEducation] = useState([]);

  const [exObj, setExObj] = useState(
    {
      companyName: "",
      title: "",
      dateStarted: "",
      dateEnded: "",
      mainDuties: "",
    }
  );

  const [experience, setExperience] = useState([]);

  const [general, setGeneral] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
  });
  
  

  const generalChange = (e) => {
    setGeneral(existingValues => ({
      ...existingValues,
      [e.target.name]: e.target.value
    }))
  };

  const generalSubmit = (e)=>{
    e.target.reset()
  };

  const educationChange = (e) => {
    setEdObj(existingValues => ({
      ...existingValues,
      [e.target.name]: e.target.value
    }))
  };

  

  const educationSubmit = (e) => {
    setEducation(education.concat(...edObj))
    setEdObj({
      companyName: "",
      title: "",
      dateStarted: "",
      dateEnded: "",
      mainDuties: "",
      })
    };


  const experienceChange = (e) => {
    setExObj(existingValues => ({
      ...existingValues,
      [e.target.name]: e.target.value
    }))
  };

  const experienceSubmit = (e) => {
    setExperience(experience.concat(...exObj))
    setExObj({
        schoolName: "",
        areaOfStudy: "",
        dateStarted: "",
        dateEnded: "",
        key: i++,
      })
  };

 



    return (
      <div className="wrapper">
        <div className="inputs">
          <h1>Resume Builder</h1>
          <div className="formArea">
            <form className="generalInfo submissionForm">
              <div className="field">
                <label htmlFor="firstName">First Name:</label>
                <input
                  onChange={generalChange}
                  type="text"
                  id="firstName"
                  name="firstName"
                ></input>
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  onChange={generalChange}
                  name="lastName"
                ></input>
              </div>

              <div className="field">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={generalChange}
                ></input>
                </div>
                <div className="field">
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={generalChange}
                  ></input>
                </div>
              
              <button onClick={generalSubmit} type="button">
                Add Info
              </button>
            </form>
          </div>
          <div className="formArea">
            <form className="education submissionForm">
              <div className="field">
                <label htmlFor="schoolName">School Name:</label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  onChange={educationChange}
                ></input>
              </div>
              <div className="field">
                <label htmlFor="areaOfStudy">Area of Study:</label>
                <input
                  type="text"
                  id="areaOfStudy"
                  name="areaOfStudy"
                  onChange={educationChange}
                ></input>
              </div>

              <div className="field">
                <label htmlFor="dateStarted">From:</label>
                <input
                  type="date"
                  id="dateStarted"
                  name="dateStarted"
                  onChange={educationChange}
                ></input>
              </div>
              <div className="field">
                <label htmlFor="dateEnded">To:</label>
                <input
                  type="date"
                  id="dateEnded"
                  name="dateEnded"
                  onChange={educationChange}
                ></input>
              </div>

              <button type="button" onClick={educationSubmit}>
                Add Education
              </button>
            </form>
          </div>
          <div className="formArea">
            <form className="experience submissionForm">
              <div className="field">
                <label htmlFor="companyName">Company Name:</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  onChange={experienceChange}
                ></input>
              </div>
              <div className="field">
                <label htmlFor="positionTitle">Position:</label>
                <input
                  type="text"
                  id="positionTitle"
                  name="title"
                  onChange={experienceChange}
                ></input>
              </div>
              <div className="field">
                <label htmlFor="dateStarted">From:</label>
                <input
                  type="date"
                  id="dateStarted"
                  name="dateStarted"
                  onChange={experienceChange}
                ></input>
              </div>
              <div className="field">
                <label htmlFor="dateEnded">To:</label>
                <input
                  type="date"
                  id="dateEnded"
                  name="dateEnded"
                  onChange={experienceChange}
                ></input>
              </div>
              
              <div className="field">
                <label htmlFor="mainDuties">Main Duties:</label>
                <input
                  type="textArea"
                  id="mainDuties"
                  name="mainDuties"
                  onChange={experienceChange}
                ></input>
              </div>
              <button type="button" onClick={experienceSubmit}>
                Add Work Experience
              </button>
            </form>
          </div>
        </div>
        <div className="display">
          <h1>Display Area</h1>
          <GeneralDisplay
            firstName={general.firstName}
            lastName={general.lastName}
            email={general.email}
            phone={general.phoneNumber}
          />
          <div className="skills">
            <h2>Education</h2>
            <EducationDisplay education={education} />
            <h2>Experience</h2>
            <ExperienceDisplay experience={experience} />
          </div>
        </div>
      </div>
    );
};

export default App;
