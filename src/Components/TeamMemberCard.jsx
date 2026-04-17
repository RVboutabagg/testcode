

function TeamMemberCard({ name, role, bio, imgUrl }) {
    return (
      <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex flex-col items-center text-center gap-3">
        <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
          {imgUrl ? (
            <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-3xl"></span>
          )}
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-800">{name}</h3>
          <p className="text-xs text-yellow-600 font-medium">{role}</p>
        </div>
        <p className="text-sm text-gray-500">{bio}</p>
      </div>
    );
  }
  
  export default TeamMemberCard;