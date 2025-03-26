import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Review() {
  const [agreements, setAgreements] = useState({ certify: false, privacyPolicy: false });
  const navigate = useNavigate();

  const handleAgreementChange = (e) => {
    setAgreements({ ...agreements, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreements.certify && agreements.privacyPolicy) {
      alert('You have successfully submitted!');
      navigate('/landingpage');
    } else {
      alert('You must agree to all terms before submitting.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">10/10 <br /> Submission Form</h2>
        <p className="text-center text-gray-600 mb-8">Please review the terms below and confirm your agreement before submitting.</p>

        <div className="mt-6 space-y-4">
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="certify" checked={agreements.certify} onChange={handleAgreementChange} className="w-5 h-5 accent-[#003366]" />
            <span className="text-gray-700">I certify that the information provided is true and correct.</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="privacyPolicy" checked={agreements.privacyPolicy} onChange={handleAgreementChange} className="w-5 h-5 accent-[#003366]" />
            <span className="text-gray-700">I agree to the company’s privacy policy and terms.</span>
          </label>
        </div>

        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold text-gray-800">Why is this important?</h3>
          <p className="text-gray-600 mt-2">By agreeing to these terms, you help us ensure compliance and maintain the integrity of the submission process.</p>
        </div>

        <button onClick={handleSubmit} className="mt-8 w-full bg-gradient-to-r from-[#003366] to-[#003366] text-white p-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all">Submit</button>
      </div>
    </div>
  );
}

export default Review;