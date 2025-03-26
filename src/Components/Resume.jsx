import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Resume() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, preferences, experience, education, skills } = location.state || {};

  const [files, setFiles] = useState({
    resume: null,
    coverLetter: null,
    supportingDocs: []
  });

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    if (name === 'supportingDocs') {
      setFiles({ ...files, supportingDocs: [...files.supportingDocs, ...selectedFiles] });
    } else {
      setFiles({ ...files, [name]: selectedFiles[0] });
    }
  };

  const handleBack = () => {
    navigate('/skills', { state: { formData, preferences, experience, education, skills } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/additional', { state: { formData, preferences, experience, education, skills, files } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">6/10 <br /> Upload Resume & Documents</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-semibold">Upload Resume (PDF, DOCX)</label>
            <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded-lg" required />
          </div>
          
          <div>
            <label className="block text-lg font-semibold">Upload Cover Letter (Optional)</label>
            <input type="file" name="coverLetter" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          
          <div>
            <label className="block text-lg font-semibold">Upload Supporting Documents (Recommendation Letters, Certificates, etc.)</label>
            <input type="file" name="supportingDocs" multiple accept=".pdf,.doc,.docx,.jpg,.png" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          
          <div className="flex justify-between mt-6">
            <button type="button" onClick={handleBack} className="bg-[#003366] text-white p-3 rounded-lg hover:bg-gray-600 transition-all">Back</button>
            <button type="submit" className="bg-[#003366] text-white p-3 rounded-lg hover:bg-blue-600 transition-all">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Resume;
