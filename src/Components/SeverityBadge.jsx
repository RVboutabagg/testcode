

function SeverityBadge({ severity }) {
    const styles = {
      low: "text-green-700 ",
      medium: "text-yellow-700 ",
      high: " text-red-700 ",
    };
  
    const labels = {
      low: "Place Holder",
      medium: "Place Holder",
      high: "Place Holder",
    };
  
    const colorClass = styles[severity] || "bg-gray-100 text-gray-600 border border-gray-300";
    const label = labels[severity] || "Unknown";
  
    return (
      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClass}`}>
        {label} Severity
      </span>
    );
  }
  
  export default SeverityBadge;