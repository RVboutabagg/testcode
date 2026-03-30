// PotholeCard.jsx


import SeverityBadge from "./SeverityBadge";

function PotholeCard({ location, description, date, severity }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-bold text-gray-800">{location}</h2>
        <SeverityBadge severity={severity} />
      </div>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <p className="text-xs text-gray-400">Reported on: {date}</p>
    </div>
  );
}

export default PotholeCard;