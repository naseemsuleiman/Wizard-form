import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Preference() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};

  const [preferences, setPreferences] = useState({
    jobTitle: '',
    workLocation: '',
    workSchedule: '',
    expectedSalary: '',
    willingToRelocate: '',
    willingToTravel: '',
    travelPercentage: '',
    noticePeriod: '',
  });

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/experience', { state: { formData, preferences } }); 
  };

  const handleBack = () => {
    navigate('/', { state: { formData } });
  };

  return  (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Step 2/10 <br /> Job Preferences</h2>
        <p className="text-gray-600 text-center mb-4">Welcome, {formData.firstName} {formData.lastName}!</p>
        <form className="space-y-4" onSubmit={handleNext}>
          <input type="text" name="jobTitle" placeholder="Desired Job Title" value={preferences.jobTitle} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required />
          
          <select name="workLocation" value={preferences.workLocation} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
            <option value="">Preferred Work Location</option>
            <option value="remote">Remote</option>
            <option value="on-site">On-site</option>
            <option value="hybrid">Hybrid</option>
          </select>
          
          <select name="workSchedule" value={preferences.workSchedule} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
            <option value="">Preferred Work Schedule</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="freelance">Freelance</option>
            <option value="internship">Internship</option>
            <option value="contract">Contract</option>
          </select>
          
          <input type="number" name="expectedSalary" placeholder="Expected Salary Range (USD)" value={preferences.expectedSalary} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required />
          
          <select name="willingToRelocate" value={preferences.willingToRelocate} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
            <option value="">Willing to Relocate?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          
          <div className="grid grid-cols-2 gap-4">
            <select name="willingToTravel" value={preferences.willingToTravel} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
              <option value="">Willing to Travel?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {preferences.willingToTravel === 'yes' && (
              <input type="number" name="travelPercentage" placeholder="% Travel Availability" value={preferences.travelPercentage} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
            )}
          </div>
          
          <select name="noticePeriod" value={preferences.noticePeriod} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
            <option value="">Notice Period / Availability</option>
            <option value="immediately">Immediately</option>
            <option value="2-weeks">2 Weeks</option>
            <option value="1-month">1 Month</option>
            <option value="other">Other</option>
          </select>
          
          <div className="flex justify-between mt-6">
            <button type="button" onClick={handleBack} className="bg-[#003366] text-white p-3 rounded-lg hover:bg-gray-600 transition-all">Back</button>
            <button type="submit" className="bg-[#003366] text-white p-3 rounded-lg hover:bg-blue-600 transition-all">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Preference;

