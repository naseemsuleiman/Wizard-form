import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Experience() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, preferences } = location.state || {};

  const [experience, setExperience] = useState([
    { jobTitle: '', company: '', industry: '', companyLocation: '', employmentType: '', startDate: '', endDate: '', currentlyWorking: false, responsibilities: '', reasonForLeaving: '', supervisorName: '', supervisorContact: '', canContactEmployer: '' }
  ]);

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newExperience = [...experience];
    newExperience[index][name] = type === 'checkbox' ? checked : value;
    setExperience(newExperience);
  };

  const addExperience = () => {
    setExperience([...experience, { jobTitle: '', company: '', industry: '', companyLocation: '', employmentType: '', startDate: '', endDate: '', currentlyWorking: false, responsibilities: '', reasonForLeaving: '', supervisorName: '', supervisorContact: '', canContactEmployer: '' }]);
  };

  const handleBack = () => {
    navigate('/preference', { state: { formData, preferences } });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/education', { state: { formData, preferences, experience } });
  };

  return (
   

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">3/10 <br /> Work Experience</h2>
        
        <form className="space-y-4" onSubmit={handleNext}>
          {experience.map((exp, index) => (
            <div key={index} className="space-y-4 border-b pb-4">
              <input type="text" name="jobTitle" placeholder="Job Title" value={exp.jobTitle} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
              <input type="text" name="company" placeholder="Company Name" value={exp.company} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
              
              <select name="industry" value={exp.industry} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required>
                <option value="">Industry</option>
                <option value="IT">IT</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Education">Education</option>
              </select>
              
              <input type="text" name="companyLocation" placeholder="Company Location" value={exp.companyLocation} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
              
              <select name="employmentType" value={exp.employmentType} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required>
                <option value="">Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              
              <div className="grid grid-cols-2 gap-4">
                <input type="date" name="startDate" value={exp.startDate} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
                {!exp.currentlyWorking && <input type="date" name="endDate" value={exp.endDate} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" />}
              </div>
              
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="currentlyWorking" checked={exp.currentlyWorking} onChange={(e) => handleChange(index, e)} className="w-4 h-4" />
                <span>Currently Working Here</span>
              </label>
              
              <textarea name="responsibilities" placeholder="Key Responsibilities & Achievements" value={exp.responsibilities} onChange={(e) => handleChange(index, e)} className="w-full p-3 border border-gray-300 rounded-lg h-24" required></textarea>
              
              <input type="text" name="reasonForLeaving" placeholder="Reason for Leaving (Optional)" value={exp.reasonForLeaving} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" />
              
              <input type="text" name="supervisorName" placeholder="Supervisor’s Name (Optional)" value={exp.supervisorName} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" />
              <input type="text" name="supervisorContact" placeholder="Supervisor’s Contact (Optional)" value={exp.supervisorContact} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" />
              
              <select name="canContactEmployer" value={exp.canContactEmployer} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required>
                <option value="">Can we contact this employer?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          ))}
          <button type="button" onClick={addExperience} className="w-full bg-[#003366] text-white p-3 rounded-lg hover:bg-gray-600 transition-all">Add More Experience</button>
          
          <div className="flex justify-between mt-6">
            <button type="button" onClick={handleBack} className="bg-[#003366] text-white p-3 rounded-lg hover:bg-gray-600 transition-all px-10 py-0.2">Back</button>
            <button type="submit" className="bg-[#003366] text-white p-3 rounded-lg hover:bg-blue-600 transition-all px-10">Next</button>
          </div>
        </form>
      </div>
    </div>
   
   
  );
}

export default Experience;
