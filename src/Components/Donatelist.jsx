// DonateList.jsx
// This is the DonateList. It takes a places array as a prop.
// It will be used on the Donate page to show links to organizations to donate to.

function DonateList({ places }) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm max-w-lg w-full">
        <h3 className="text-base font-bold text-gray-800 mb-3">Places to Donate To</h3>
        <ul className="flex flex-col gap-3">
          {places.map((place, index) => (
            <li key={index} className="flex items-center justify-between border border-gray-100 rounded-lg px-4 py-3 bg-gray-50">
              <div>
                <p className="text-sm font-medium text-gray-700">{place.name}</p>
                <p className="text-xs text-gray-400">{place.description}</p>
              </div>
              <a
                href={place.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-3 py-1 rounded-lg transition-colors"
              >
                Donate
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default DonateList;