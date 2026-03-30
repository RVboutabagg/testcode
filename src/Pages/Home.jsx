// Home.jsx
// The Home page. Shows a welcome message, quick nav buttons, and a list of recent pothole reports.

import PotholeCard from "../Components/PotholeCard";

const sampleReports = [
  {
    location: "14th Ave & International Blvd",
    description: "Large pothole near the crosswalk, causes cars to swerve.",
    date: "3/24/2026",
    severity: "high",
  },
  {
    location: "MacArthur Blvd near 35th Ave",
    description: "Small pothole on the right lane, minor bump.",
    date: "3/22/2026",
    severity: "low",
  },
  {
    location: "Telegraph Ave & 40th St",
    description: "Medium-sized pothole forming near bus stop.",
    date: "3/20/2026",
    severity: "medium",
  },
];

function Home({ onNavigate }) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Hero */}
      <div className="bg-yellow-400 rounded-2xl p-6 mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Oakland Pothole Tracker</h1>
        <p className="text-gray-700 text-sm mb-4">
          Track, report, and advocate for better roads in Oakland.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <button
            onClick={() => onNavigate("Report")}
            className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Report a Pothole
          </button>
          <button
            onClick={() => onNavigate("Donate")}
            className="bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-300"
          >
            Donate
          </button>
          <button
            onClick={() => onNavigate("About")}
            className="bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-300"
          >
            About Us
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Reports</h2>
      <div className="flex flex-col gap-4">
        {sampleReports.map((report, index) => (
          <PotholeCard
            key={index}
            location={report.location}
            description={report.description}
            date={report.date}
            severity={report.severity}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;