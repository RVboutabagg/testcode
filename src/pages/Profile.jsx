
import UserCard from "../Components/UserCard";

function Profile() {
  
  const user = {
    name: "Place Holder",
    tagline: "Place Holder",
    email: "Place Holder",
    gender: "Place Holder",
    reportCount: 5,
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">My Profile</h1>
      <p className="text-sm text-gray-500 mb-8">Your account info and activity.</p>

      <div className="flex justify-center">
        <UserCard
          name={user.name}
          tagline={user.tagline}
          email={user.email}
          gender={user.gender}
          reportCount={user.reportCount}
        />
      </div>
    </div>
  );
}

export default Profile;