import React, {Component} from 'react';
import EducationSubmission from './components/EducationalInfo';
import ExperienceSubmission from './components/ExperienceInfo';
import GeneralInfoSubmission from './components/GeneralInfo';
import './styles/App.css';

class App extends Component{

  render(){
  return (
    <div>
      <EducationSubmission></EducationSubmission>
      <GeneralInfoSubmission></GeneralInfoSubmission>
      <ExperienceSubmission></ExperienceSubmission>
    </div>
  );
  }
}

export default App;
