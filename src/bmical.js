import React from "react";
import { Link } from "react-router-dom";

const BMILandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-50 to-blue-200">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">BMI Calculator</h1>
        <nav>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 mx-4 transition"
          >
            About
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 mx-4 transition"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 mx-4 transition"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-blue-600">
          Welcome to the BMI Calculator
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-lg">
          Discover your Body Mass Index (BMI) and understand your health better.
          This tool helps you assess if your weight is within a healthy range
          based on your height.
        </p>
        <Link to="/calculator">
          <button className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition font-semibold">
            Get Started
          </button>
        </Link>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="bg-white py-10 px-6 text-center shadow-inner"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          About the Calculator
        </h3>
        <p className="text-gray-700 max-w-xl mx-auto">
          The BMI Calculator uses your height and weight to calculate your Body
          Mass Index. It helps identify if you're underweight, normal, overweight, 
          or obese based on standard BMI categories.
        </p>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-blue-600 text-white py-6 text-center"
      >
        <p>Made by SaiKrishna</p>
        <p>Contact: <a href="mailto:saimirgude@gmail.com" className="underline">saimirgude@gmail.com</a></p>
      </footer>
    </div>
  );
};

export default BMILandingPage;
