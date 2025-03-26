import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Additional() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, preferences, experience, education, skills, files } = location.state || {};

  const [additionalInfo, setAdditionalInfo] = useState({
    workAuthorization: '',
    visaSponsorship: '',
    disability: '',
    disabilityExplanation: '',
    felony: '',
    felonyExplanation: '',
    memberships: '',
    hobbies: ''
  });

  const handleChange = (e) => {
    setAdditionalInfo({ ...additionalInfo, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    navigate('/resume-upload', { state: { formData, preferences, experience, education, skills, files } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/reference', { state: { formData, preferences, experience, education, skills, files, additionalInfo } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">7/10 <br /> Additional Information</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-semibold">Are you legally authorized to work in your country?</label>
            <select name="workAuthorization" value={additionalInfo.workAuthorization} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          
          <div>
            <label className="block text-lg font-semibold">Do you require visa sponsorship?</label>
            <select name="visaSponsorship" value={additionalInfo.visaSponsorship} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          
          <div>
            <label className="block text-lg font-semibold">Do you have any disabilities requiring accommodations?</label>
            <select name="disability" value={additionalInfo.disability} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {additionalInfo.disability === 'Yes' && (
              <textarea name="disabilityExplanation" placeholder="Please explain" value={additionalInfo.disabilityExplanation} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg h-24 mt-2"></textarea>
            )}
          </div>
          
          <div>
            <label className="block text-lg font-semibold">Have you ever been convicted of a felony?</label>
            <select name="felony" value={additionalInfo.felony} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {additionalInfo.felony === 'Yes' && (
              <textarea name="felonyExplanation" placeholder="Please explain" value={additionalInfo.felonyExplanation} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg h-24 mt-2"></textarea>
            )}
          </div>
          
          <div>
            <label className="block text-lg font-semibold">Professional Memberships (Optional)</label>
            <input type="text" name="memberships" placeholder="E.g., IEEE, PMI, etc." value={additionalInfo.memberships} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          
          <div>
            <label className="block text-lg font-semibold">Hobbies & Interests (Optional)</label>
            <input type="text" name="hobbies" placeholder="E.g., Reading, Traveling, Sports" value={additionalInfo.hobbies} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          
          <div className="flex justify-between mt-6">
            <button type="button" onClick={handleBack} className="bg-[#003366] text-white p-3 rounded-lg hover:bg-gray-600 transition-all">Back</button>
            <button type="submit" className="bg-[#003366] text-white p-3 rounded-lg hover:bg-blue-600 transition-all">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Additional;
