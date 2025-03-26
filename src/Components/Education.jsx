import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Education() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, preferences, experience } = location.state || {};

  const [education, setEducation] = useState([
    { degree: '', major: '', institution: '', location: '', graduationYear: '', gpa: '', honors: '', thesis: '' }
  ]);

  const handleChange = (index, e) => {
    const newEducation = [...education];
    newEducation[index][e.target.name] = e.target.value;
    setEducation(newEducation);
  };

  const addEducation = () => {
    setEducation([...education, { degree: '', major: '', institution: '', location: '', graduationYear: '', gpa: '', honors: '', thesis: '' }]);
  };

  const handleBack = () => {
    navigate('/experience', { state: { formData, preferences, experience } });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/skills', { state: { formData, preferences, experience, education } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">4/10 <br /> Education</h2>
        
        <form className="space-y-4" onSubmit={handleNext}>
          {education.map((edu, index) => (
            <div key={index} className="space-y-4 border-b pb-4">
              <select name="degree" value={edu.degree} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required>
                <option value="">Select Degree</option>
                <option value="BSc">BSc</option>
                <option value="BA">BA</option>
                <option value="MSc">MSc</option>
                <option value="MA">MA</option>
                <option value="PhD">PhD</option>
                <option value="Diploma">Diploma</option>
              </select>
              
              <input type="text" name="major" placeholder="Major/Field of Study" value={edu.major} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
              <input type="text" name="institution" placeholder="University/Institution Name" value={edu.institution} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
              <input type="text" name="location" placeholder="University Location" value={edu.location} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required />
              
              <select name="graduationYear" value={edu.graduationYear} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" required>
                <option value="">Select Graduation Year</option>
                {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              
              <input type="text" name="gpa" placeholder="GPA (if applicable)" value={edu.gpa} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" />
              <input type="text" name="honors" placeholder="Honors & Awards (Optional)" value={edu.honors} onChange={(e) => handleChange(index, e)} className="w-full p-2 border border-gray-300 rounded-lg" />
              <textarea name="thesis" placeholder="Thesis/Research Work (if applicable)" value={edu.thesis} onChange={(e) => handleChange(index, e)} className="w-full p-3 border border-gray-300 rounded-lg h-24"></textarea>
            </div>
          ))}
          <button type="button" onClick={addEducation} className="w-full bg-[#003366] text-white p-3 rounded-lg hover:bg-gray-600 transition-all">Add More Education</button>
          
          <div className="flex justify-between mt-6">
            <button type="button" onClick={handleBack} className="bg-[#003366] text-white p-3 rounded-lg hover:bg-gray-600 transition-all">Back</button>
            <button type="submit" className="bg-[#003366] text-white p-3 rounded-lg hover:bg-blue-600 transition-all">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Education;
