import React, { Component } from "react";
import EducationDisplay from "./components/EducationDisplay";
import EducationSubmission from "./components/EducationalInfo";
import ExperienceDisplay from "./components/ExperienceDisplay";
import ExperienceSubmission from "./components/ExperienceInfo";
import GeneralDisplay from "./components/GeneralDisplay";
import GeneralInfoSubmission from "./components/GeneralInfo";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      edObj: {
      schoolName: "",
      areaOfStudy: "",
      yearStarted: "",
      yearEnded: "",
      },
      education: [],
      exObj: {
      companyName: "",
      title: "",
      dateStarted: "",
      dateEnded: "",
      },
      experience: [],
      general: {
        firstName: "Duncan",
        lastName: "McKee",
        email: "test@gmail",
        phone: "123456789",
      },
    };

  }
  

  addEducation = (edName, edStudy, edStarted, edEnded) => {
    this.setState({
      edObj:{
      schoolName: edName,
      areaOfStudy: edStudy,
      yearStarted: edStarted,
      yearEnded: edEnded,
      }
    })
    this.setState({
      education:this.state.education.concat(this.state.edObj)
    })

    this.setState({
      edObj: {
        schoolName: "",
        areaOfStudy: "",
        yearStarted: "",
        yearEnded: "",
        }
    })
  }

addExperience = (exName, exTitle, exDateStarted,exDateEnded) => {
    this.setState({
      exObj:{
        companyName: exName, 
        title: exTitle, 
        dateStarted: exDateStarted,
        dateEnded: exDateEnded
      }});
    this.setState({
      experience: this.state.experience.concat(this.setState.exObj)
    });
    this.setState({
      exObj:{
        companyName: "", 
        title: "", 
        dateStarted: "",
        dateEnded: ""
      }});
  }



  // generalChange = (e) => {
  //   this.setState({
  //     firstName: e.target.value,
  //     lastName:e.target.value,
  //     email: e.target.value,
  //     phone: e.target.value,
  //   })
  // }

  // generalSubmission = (e) =>{
  //   e.preventDefault();
  //   this.setState({
  //     general: this.state.general.concat(educationChange)
  //   })
  // }
  // addEducation={this.addEducation().bind(this)}
  // addExperience = {this.addExperience().bind(this)}



  render() {
    const { education, experience, general } = this.state;
    return (
      <div>
        <GeneralInfoSubmission></GeneralInfoSubmission>
        <EducationSubmission ></EducationSubmission>
        <ExperienceSubmission ></ExperienceSubmission>
        <GeneralDisplay
          firstName={general.firstName}
          lastName={general.lastName}
          email={general.email}
          phone={general.phone}
        />

        <EducationDisplay education={education} />

        <ExperienceDisplay experience={experience} />
      </div>
    );
  }
}

export default App;
