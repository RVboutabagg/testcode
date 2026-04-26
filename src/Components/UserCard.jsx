
function UserCard({ name, tagline, email, gender, reportCount }) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center gap-4 max-w-sm w-full">

        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl">
          
        </div>
  
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500 italic">{tagline}</p>
        </div>
  
       
        <div className="w-full border border-gray-100 rounded-lg p-4 bg-gray-50 flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">User Stats</h3>
          <p className="text-sm text-gray-600">{email}</p>
          <p className="text-sm text-gray-600">{gender}</p>
          <p className="text-sm text-gray-600">{reportCount} reports made</p>
        </div>
      </div>
    );
  }
  
  export default UserCard;