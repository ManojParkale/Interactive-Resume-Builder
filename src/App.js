import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ResumePreview from './components/ResumePreveiw';
import ResumeDownload from './components/ResumeDownload';

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [isPreview, setIsPreview] = useState(false);

  // Function to handle form submission and data
  const handleFormSubmit = (data) => {
    setResumeData(data);
    setIsPreview(true);
  };

  // Function to handle going back to form without losing data
  const handleBackToForm = () => {
    setIsPreview(false);
  };

  return (
    <div className="App">
      <h1 class="ResumeHeader">Resume Generator</h1>
      {!isPreview ? (
        <Form onSubmit={handleFormSubmit} resumeData={resumeData} />
      ) : (
        <div>
          <ResumePreview resumeData={resumeData} />
          <ResumeDownload resumeData={resumeData} />
          <button onClick={handleBackToForm}>Back to Form</button>
        </div>
      )}
    </div>
  );
}

export default App;
