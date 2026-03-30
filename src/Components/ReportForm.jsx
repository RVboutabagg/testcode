

import { useState } from "react";

function ReportForm({ onSubmit }) {
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [severity, setSeverity] = useState("low");
  const [radius, setRadius] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const conditions = ["Very Poor", "Poor", "Decent", "Good", "Very Good"];

  function handleSubmit(e) {
    e.preventDefault();
    if (!location || !condition) return;

    const report = {
      location,
      condition,
      severity,
      radius,
      date: new Date().toLocaleDateString(),
    };

    if (onSubmit) onSubmit(report);

    setLocation("");
    setCondition("");
    setSeverity("low");
    setRadius("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-lg w-full">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Report a Pothole</h2>

      {submitted && (
        <p className="text-green-600 text-sm font-medium mb-4 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
          ✅ Report submitted! Thank you.
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location of Pothole
          </label>
          <input
            type="text"
            placeholder="e.g. 14th Ave & International Blvd"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Road Condition */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Overall Condition of Road
          </label>
          <div className="flex flex-col gap-1">
            {conditions.map((c) => (
              <label key={c} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="radio"
                  name="condition"
                  value={c}
                  checked={condition === c}
                  onChange={(e) => setCondition(e.target.value)}
                  className="accent-yellow-400"
                />
                {c}
              </label>
            ))}
          </div>
        </div>

        {/* Severity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How Severe is the Pothole?
          </label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Estimated Radius */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Est. Radius (inches)
          </label>
          <input
            type="number"
            placeholder="e.g. 12"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg text-sm transition-colors"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}

export default ReportForm;