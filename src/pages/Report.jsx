

import { useState } from "react";
import ReportForm from "../Components/ReportForm";
import PotholeCard from "../Components/PotholeCard";

function Report() {
  const [reports, setReports] = useState([]);

  function handleNewReport(report) {
    setReports((prev) => [report, ...prev]);
  }

  return (
    <div className="p-6 max-w-2xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Place Holder</h1>
        <p className="text-sm text-gray-500">
        Place Holder
        </p>
      </div>

      <ReportForm onSubmit={handleNewReport} />

      {/* Show submitted reports */}
      {reports.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">Place Holder</h2>
          <div className="flex flex-col gap-4">
            {reports.map((report, index) => (
              <PotholeCard
                key={index}
                location={report.location}
                description={`Road condition: ${report.condition}. Est. radius: ${report.radius || "N/A"} inches.`}
                date={report.date}
                severity={report.severity}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Report;