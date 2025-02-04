import React from "react";
import backgroundImage from "../assets/background.jpg"; // Ensure correct path
import logo from "../assets/logo.png"; // Ensure correct path

const RequirementsForm = () => {
  const requirements = [
    "You are running PHP version 8.2.3.",
    "PDO PHP extension is available.",
    "OpenSSL PHP extension is available.",
    "Curl PHP extension is available.",
    "Zip PHP extension is available.",
  ];

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="mx-auto w-16" />
          <h1 className="text-xl font-bold text-gray-800">
            School Education Department
          </h1>
          <p className="text-sm text-gray-600">Legal Cases Monitoring System</p>
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Welcome to the Legal Cases Monitoring System
        </h2>
        <form>
          <div className="space-y-3">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
                />
                <label className="ml-3 text-gray-700">{requirement}</label>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            By clicking "Next," you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Terms & Privacy Policy
            </a>.
          </p>
          <button
            type="button"
            className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Next
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-gray-500 hover:underline">
            Need Help?
          </a>
        </div>
      </div>
    </div>
  );
};

export default RequirementsForm;
