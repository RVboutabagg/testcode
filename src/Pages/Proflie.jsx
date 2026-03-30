// Profile.jsx
// The Profile page. Shows a UserCard with the user's info and stats.

import UserCard from "../Components/UserCard";

function Profile() {
  // In a real app this data would come from a database / auth system
  const user = {
    name: "Your Name",
    tagline: "Oakland resident & road advocate",
    email: "yourname@email.com",
    gender: "Not specified",
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