import React, { Component } from "react";
import EducationDisplay from "./components/EducationDisplay";
import ExperienceDisplay from "./components/ExperienceDisplay";
import GeneralDisplay from "./components/GeneralDisplay";
import "./styles/App.css";

let i = 0

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      edObj: {
        schoolName: "",
        areaOfStudy: "",
        dateStarted: "",
        dateEnded: "",
        key: i,
      },
      education: [],
      exObj: {
        companyName: "",
        title: "",
        dateStarted: "",
        dateEnded: "",
        mainDuties:"",
      },
      experience: [],
      general: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
    };
  }



  generalChange = (e) => {
     let general = {...this.state.general};
     let newName = e.target.name;
  
     let newValue = e.target.value;
     general[newName] = newValue;
     this.setState({general})
    };

    educationChange = (e) => {
      let edObj = {...this.state.edObj};
      let newName = e.target.name;
   
      let newValue = e.target.value;
      edObj[newName] = newValue;
      this.setState({edObj})
     };

     educationSubmit = (e) => {
      this.setState({
        education: this.state.education.concat(this.state.edObj),
        edObj: {
          schoolName: "",
          areaOfStudy: "",
          dateStarted: "",
          dateEnded: "",
          key: i++
        }
      })
     }

     experienceChange = (e) => {
      let exObj = {...this.state.exObj};
      let newName = e.target.name;
   
      let newValue = e.target.value;
      exObj[newName] = newValue;
      this.setState({exObj})
     };

     experienceSubmit = (e) => {
      this.setState({
        experience: this.state.education.concat(this.state.exObj),
        exObj: {
          companyName: "",
          title: "",
          dateStarted: "",
          dateEnded: "",
          mainDuties:"",
        }
      })
     }

  render() {
    const { education, experience, general } = this.state;
    return (
      <div>
        <div>
          <form className="generalInfo submissionForm">
            <div className="fieldContainer">
              <div className="field">
                <label htmlFor="firstName">First Name:</label>
                <input onChange={this.generalChange}type="text" id="firstName" name="firstName"></input>
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" onChange={this.generalChange} name="lastName"></input>
              </div>
            </div>
            <div className="fieldContainer">
              <div className="field">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={this.generalChange}></input>
              </div>
              <div className="field">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={this.generalChange}
                ></input>
              </div>
            </div>
            <button onClick={this.generalChange} type="button" >Add Info</button>
          </form>
        </div>
        <div>
          <form className="education submissionForm">
            <div className="fieldContainer">
              <div className="field">
                <label htmlFor="schoolName">School Name:</label>
                <input type="text" id="schoolName" name="schoolName" onChange = {this.educationChange}></input>
              </div>
              <div className="field">
                <label htmlFor="areaOfStudy">Area of Study:</label>
                <input type="text" id="areaOfStudy" name="areaOfStudy" onChange = {this.educationChange}></input>
              </div>
            </div>
            <div className="fieldContainer">
              <div className="field">
                <label htmlFor="dateStarted">From:</label>
                <input type="date" id="dateStarted" name="dateStarted" onChange = {this.educationChange}></input>
              </div>
              <div className="field">
                <label htmlFor="dateEnded">To:</label>
                <input type="date" id="dateEnded" name="dateEnded" onChange = {this.educationChange}></input>
              </div>
            </div>
            <button type="button" onClick={this.educationSubmit}>Add Education</button>
          </form>
        </div>
        <div>
          <form className="experience submissionForm">
            <div className="fieldContainer">
              <div className="field">
                <label htmlFor="companyName">Company Name:</label>
                <input type="text" id="companyName" name="companyName" onChange={this.experienceChange}></input>
              </div>
              <div className="field">
                <label htmlFor="positionTitle">Position:</label>
                <input type="text" id="positionTitle" name="positionTitle" onChange={this.experienceChange}></input>
              </div>
            </div>
            <div className="fieldContainer">
              <div className="field">
                <label htmlFor="dateStarted">From:</label>
                <input type="date" id="dateStarted" name="dateStarted" onChange={this.experienceChange}></input>
              </div>
              <div className="field">
                <label htmlFor="dateEnded">To:</label>
                <input type="date" id="dateEnded" name="dateEnded" onChange={this.experienceChange}></input>
              </div>
            </div>
            <div className="fieldContainer">
              <div className="field">
                <label htmlFor="mainDuties">Main Duties:</label>
                <input type="textArea" id="mainDuties" name="mainDuties" onChange={this.experienceChange}></input>
              </div>
            </div>
            <button type="button" onClick={this.experienceSubmit}>Add Work Experience</button>
          </form>
        </div>
        <GeneralDisplay
          firstName={general.firstName}
          lastName={general.lastName}
          email={general.email}
          phone={general.phoneNumber}
        />
        <h2>Education</h2>
        <EducationDisplay education={education} />
        <h2>Experience</h2>
        <ExperienceDisplay experience={experience} />
      </div>
    );
  }
}

export default App;
