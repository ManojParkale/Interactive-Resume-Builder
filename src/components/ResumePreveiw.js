import React from 'react';

function ResumePreview({ resumeData }) {
  if (!resumeData) return null;

  return (
    <div className="resume-preview">
      <h2>{resumeData.name}</h2>
      <h3 class="text-italic">{resumeData.position}</h3>
      <p>{resumeData.phone} | {resumeData.email}</p>
      <p>{resumeData.linkedin} | {resumeData.github}</p>
      <h3>Summary</h3>
      <p>{resumeData.summary}</p>

      <h3>Experience</h3>
      <p><strong>{resumeData.experience.title}</strong> at {resumeData.experience.company}</p>
      <p>{resumeData.experience.description}</p>

      <h3>Skills</h3>
      <p>{resumeData.skills}</p>

      <h3>Education</h3>
      <p>{resumeData.education.degree}</p>
      <p class="text-italic">{resumeData.education.university}</p>
    </div>
  );
}

export default ResumePreview;
