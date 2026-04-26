

import { useState } from "react";
import DonateList from "../Components/DonateList";

const donatePlaces = [
  {
    name: "Oakland Public Works",
    description: "Directly support road repair in Oakland",
    url: "https://www.oaklandca.gov/departments/public-works",
  },
  {
    name: "Fix Our Roads CA",
    description: "California advocacy group for road infrastructure",
    url: "https://www.fixourroads.org",
  },
  {
    name: "Street Repair Fund",
    description: "Community-driven fund for local street improvements",
    url: "https://www.oaklandca.gov",
  },
];

function Donate() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [donated, setDonated] = useState(false);

  function handleDonate(e) {
    e.preventDefault();
    if (!email || !amount) return;
    setDonated(true);
    setEmail("");
    setAmount("");
    setTimeout(() => setDonated(false), 3000);
  }

  return (
    <div className="p-6 max-w-2xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Donate</h1>
        <p className="text-sm text-gray-500">Support the effort to fix Oakland's roads</p>
      </div>

      
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-base font-bold text-gray-800 mb-4">Make a Donation</h2>

        {donated && (
          <p className="text-green-600 text-sm font-medium mb-4 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
            Thank you for the donation
          </p>
        )}

        <form onSubmit={handleDonate} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
            <input
              type="number"
              placeholder="e.g. 25"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg text-sm transition-colors"
          >
            Submit Donation
          </button>
        </form>
      </div>

      
      <DonateList places={donatePlaces} />
    </div>
  );
}

export default Donate;