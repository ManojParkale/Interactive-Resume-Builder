import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Form({ onSubmit, resumeData }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // UseEffect hook to pre-fill the form fields if data is passed
  useEffect(() => {
    if (resumeData) {
      setValue('name', resumeData.name);
      setValue('position', resumeData.position);
      setValue('phone', resumeData.phone);
      setValue('email', resumeData.email);
      setValue('linkedin', resumeData.linkedin);
      setValue('github', resumeData.github);
      setValue('summary', resumeData.summary);
      setValue('experience.title', resumeData.experience?.title);
      setValue('experience.company', resumeData.experience?.company);
      setValue('experience.description', resumeData.experience?.description);
      setValue('skills', resumeData.skills);
      setValue('education.university', resumeData.education?.university);
      setValue('education.degree', resumeData.education?.degree);
    }
  }, [resumeData, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Personal Information</h2>
      <label>Name:</label>
      <input {...register('name', { required: true })} />
      {errors.name && <p>This field is required</p>}
      
      <label>Position:</label>
      <input {...register('position', { required: true })} />

      <label>Phone:</label>
      <input {...register('phone', { required: true })} />

      <label>Email:</label>
      <input {...register('email', { required: true })} />

      <label>LinkedIn:</label>
      <input {...register('linkedin')} />

      <label>Github:</label>
      <input {...register('github')} />

      <label>Summary:</label>
      <textarea {...register('summary', { required: true })}></textarea>

      <h2>Experience</h2>
      <label>Job Title:</label>
      <input {...register('experience.title')} />
      
      <label>Company Name:</label>
      <input {...register('experience.company')} />
      
      <label>Job Description:</label>
      <textarea {...register('experience.description')} />

      <h2>Skills</h2>
      <textarea {...register('skills')}></textarea>

      <h2>Education</h2>
      <label>University:</label>
      <input {...register('education.university')} />

      <label>Degree:</label>
      <input {...register('education.degree')} />

      <button type="submit">Generate Resume</button>
    </form>
  );
}

export default Form;
