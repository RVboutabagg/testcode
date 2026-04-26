

import TeamMemberCard from "../Components/TeamMemberCard";

const teamMembers = [
  {
    name: "Johann",
    role: "Co-Owner",
    bio: "Senior at Oakland Tech",
  },
  {
    name: "Rolo",
    role: "Co-Owner",
    bio: "Senior at Oakland Tech",
  },
  
];

function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">About Us</h1>
      <p className="text-sm text-gray-500 mb-8">
      The ones behind Pothole Predators
      </p>

     
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
          />
        ))}
      </div>

      
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
        The Mission of Pothile Predators is to help the community by having users input data about potholes they run into in Oakland that people can see and avoid. We also want to help fund the fixing of these potholes through donations by our users to websites that help with the filling of these potholes.
        </p>
      </div>
    </div>
  );
}

export default About;