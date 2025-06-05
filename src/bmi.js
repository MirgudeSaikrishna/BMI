import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters ** 2)).toFixed(2);
      setBmi(calculatedBMI);
      setCategory(determineBMICategory(calculatedBMI));
    } else {
      alert("Please enter valid weight and height!");
    }
  };

  const determineBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obesity";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="p-8 bg-white rounded-xl shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          BMI Calculator
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Weight (kg):
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your weight"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Height (cm):
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your height"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-xl font-bold text-gray-800">
              Your BMI: <span className="text-blue-600">{bmi}</span>
            </p>
            <p
              className={`text-lg font-semibold ${
                category === "Underweight"
                  ? "text-yellow-500"
                  : category === "Normal weight"
                  ? "text-green-500"
                  : category === "Overweight"
                  ? "text-orange-500"
                  : "text-red-500"
              }`}
            >
              Category: {category}
            </p>
          </div>
        )}
      </div>
        <img src="https://cdn.shopify.com/s/files/1/0011/7958/2517/files/bmi-body-mass-index-for-plus-size-obese-chart.jpg?v=1586289163" , alt="chart"/>
    </div>
  );
};

export default BMICalculator;
