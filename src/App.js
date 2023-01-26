import React, {Component} from 'react';
import EducationDisplay from './components/EducationDisplay';
import EducationSubmission from './components/EducationalInfo';
import ExperienceDisplay from './components/ExperienceDisplay';
import ExperienceSubmission from './components/ExperienceInfo';
import GeneralDisplay from './components/GeneralDisplay';
import GeneralInfoSubmission from './components/GeneralInfo';
import './styles/App.css';

class App extends Component{

  constructor(){
    super();

    function educationObject (){
      return{
        schoolName:'',
        areaOfStudy:'',
        yearStarted:'',
        yearEnded:'',
      }
    }

    function experienceObject(){
      return {
        companyName:'',
        title:'',
        dateStarted:'',
        dateEnded:'',
      }
    }

    this.state = {
      education:[educationObject(),],
      experience:[experienceObject(),],
      general:{
        firstName:'Duncan',
        lastName:'McKee',
        email:'test@gmail',
        phone:'123456789',
      }
    }

  }
  

  render(){
    const {education, experience, general} = this.state
  return (
    <div>
      <GeneralInfoSubmission></GeneralInfoSubmission>
      <EducationSubmission></EducationSubmission>
      <ExperienceSubmission></ExperienceSubmission>
      <GeneralDisplay
       firstName={general.firstName} 
       lastName={general.lastName} 
       email={general.email}
       phone={general.phone}/>

      <EducationDisplay
       companyName={education.schoolName}
       title={education.areaOfStudy}
       dateStarted={education.dateStarted}
       dateEnded={education.dateEnded}
       />

       <ExperienceDisplay
       companyName={experience.companyName}
       title={experience.title}
       dateStarted={experience.dateStarted}
       dateEnded={experience.dateEnded}
       />
    </div>
  );
  }
}

export default App;
