import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  
  return (
    <div
    className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/pexels-vojtech-okenka-127162-392018.jpg')" }}
  >
    <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-2xl text-center max-w-lg">
      <h1 className="text-4xl font-bold text-[#003366] mb-4">Thank You for Applying!</h1>
      <p className="text-gray-700 mb-6">We appreciate your interest in joining our team. Our recruiters will review your application and get back to you soon.</p>
     
    </div>
  </div>
  )
}

export default Landingpage