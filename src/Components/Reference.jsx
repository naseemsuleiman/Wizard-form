import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Reference() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, preferences, experience, education, skills, files, additionalInfo } = location.state || {};

  const [references, setReferences] = useState([
    { fullName: '', company: '', jobTitle: '', relationship: '', email: '', phone: '' }
  ]);

  const handleChange = (index, e) => {
    const newReferences = [...references];
    newReferences[index][e.target.name] = e.target.value;
    setReferences(newReferences);
  };

  const addReference = () => {
    setReferences([...references, { fullName: '', company: '', jobTitle: '', relationship: '', email: '', phone: '' }]);
  };

  const handleBack = () => {
    navigate('/additional-info', { state: { formData, preferences, experience, education, skills, files, additionalInfo } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/review', { state: { formData, preferences, experience, education, skills, files, additionalInfo, references } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Step 8/10 <br /> References</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {references.map((ref, index) => (
            <div key={index} className="space-y-4 border-b pb-4">
              <input type="text" name="fullName" placeholder="Full Name" value={ref.fullName} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
              <input type="text" name="company" placeholder="Company Name" value={ref.company} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
              <input type="text" name="jobTitle" placeholder="Job Title" value={ref.jobTitle} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
              <input type="text" name="relationship" placeholder="Relationship to You" value={ref.relationship} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
              <input type="email" name="email" placeholder="Email Address" value={ref.email} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
              <input type="tel" name="phone" placeholder="Phone Number" value={ref.phone} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
            </div>
          ))}
          <button type="button" onClick={addReference} className="w-full bg-[#003366] text-white p-3 rounded-lg hover:bg-gray-600 transition-all">Add More Reference</button>
          
          <div className="flex justify-between mt-6">
            <button type="button" onClick={handleBack} className="bg-[#003366] text-white p-3 rounded-lg hover:bg-gray-600 transition-all">Back</button>
            <button type="submit" className="bg-[#003366] text-white p-3 rounded-lg hover:bg-blue-600 transition-all">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reference;
