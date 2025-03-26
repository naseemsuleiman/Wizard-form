import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Skills() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, preferences, experience, education } = location.state || {};

  const technicalSkillsOptions = ["Programming", "Marketing", "Data Analysis", "Design", "Project Management"];
  const softSkillsOptions = ["Leadership", "Communication", "Teamwork", "Problem-Solving", "Adaptability"];
  const languagesOptions = ["English", "Spanish", "French", "German", "Chinese"];
  const proficiencyLevels = ["Beginner", "Intermediate", "Fluent", "Native"];

  const [skills, setSkills] = useState({
    technicalSkill: "",
    softSkill: "",
    certifications: [],
    language: "",
    proficiency: ""
  });

  const handleChange = (e) => {
    setSkills({ ...skills, [e.target.name]: e.target.value });
  };

  const addCertification = () => {
    setSkills({
      ...skills,
      certifications: [...skills.certifications, { name: '', organization: '', issuedDate: '', expirationDate: '', certId: '' }]
    });
  };

  const handleBack = () => {
    navigate('/education', { state: { formData, preferences, experience, education } });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/resume', { state: { formData, preferences, experience, education, skills } });
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">5/10 <br /> Skills</h2>
        <form className="space-y-4" onSubmit={handleNext}>
          <div>
            <label className="block text-lg font-semibold">Technical Skills</label>
            <select name="technicalSkill" value={skills.technicalSkill} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="">Choose a Skill</option>
              {technicalSkillsOptions.map(skill => <option key={skill} value={skill}>{skill}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold">Soft Skills</label>
            <select name="softSkill" value={skills.softSkill} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="">Choose a Skill</option>
              {softSkillsOptions.map(skill => <option key={skill} value={skill}>{skill}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold">Languages</label>
            <select name="language" value={skills.language} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="">Choose a Language</option>
              {languagesOptions.map(lang => <option key={lang} value={lang}>{lang}</option>)}
            </select>
            <select name="proficiency" value={skills.proficiency} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg mt-2">
              <option value="">Select Proficiency Level</option>
              {proficiencyLevels.map(level => <option key={level} value={level}>{level}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold">Certifications</label>
            {skills.certifications.map((cert, index) => (
              <div key={index} className="space-y-2 border-b pb-4">
                <input type="text" name="name" placeholder="Certification Name" value={cert.name} onChange={(e) => handleChange(e, index)} className="w-full p-2 border border-gray-300 rounded-lg" required />
                <input type="text" name="organization" placeholder="Issuing Organization" value={cert.organization} onChange={(e) => handleChange(e, index)} className="w-full p-2 border border-gray-300 rounded-lg" required />
                <input type="date" name="issuedDate" placeholder="Issued Date" value={cert.issuedDate} onChange={(e) => handleChange(e, index)} className="w-full p-2 border border-gray-300 rounded-lg" required />
                <input type="date" name="expirationDate" placeholder="Expiration Date (if applicable)" value={cert.expirationDate} onChange={(e) => handleChange(e, index)} className="w-full p-2 border border-gray-300 rounded-lg" />
                <input type="text" name="certId" placeholder="Certification ID (if applicable)" value={cert.certId} onChange={(e) => handleChange(e, index)} className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
            ))}
            <button type="button" onClick={addCertification} className="w-full bg-[#003366] text-white p-3 rounded-lg hover:bg-gray-600 transition-all">Add More Certification</button>
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

export default Skills;
