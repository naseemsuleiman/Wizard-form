import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Personal() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    gender: '',
    nationality: '',
    email: '',
    phone: '',
    altPhone: '',
    address: '',
    linkedIn: '',
    portfolio: '',
    github: '',
    summary: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleNext = () => {
    if (!formData.firstName || !formData.lastName || !formData.dob || !formData.gender || !formData.nationality || !formData.email || !formData.phone || !formData.address) {
      setError('Please fill in all required fields.');
    } else {
      setError('');
      navigate('/preference', { state: { formData } }); 
    }
  };
  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8  " >
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-4xl ">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Step 1/10 <br /> Personal Details </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
            <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="preferNotToSay">Prefer not to say</option>
          </select>
          <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          <div className="grid grid-cols-2 gap-4">
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
            <input type="tel" name="altPhone" placeholder="Alternative Phone (Optional)" value={formData.altPhone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <input type="text" name="address" placeholder="Home Address (Street, City, State, Zip, Country)" value={formData.address} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          <input type="url" name="linkedIn" placeholder="LinkedIn Profile (URL)" value={formData.linkedIn} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          <input type="url" name="portfolio" placeholder="Portfolio/Website (Optional)" value={formData.portfolio} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          <input type="url" name="github" placeholder="GitHub Profile (if applicable)" value={formData.github} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" />
          <textarea name="summary" placeholder="Personal Summary (Short bio)" value={formData.summary} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg h-24"></textarea>
        </div>
        <button onClick={handleNext} className="mt-6 w-full bg-[#003366] text-white p-3 rounded-lg hover:bg-blue-600 transition-all">Next</button>
      </div>
    </div>
  );
}

export default Personal;


