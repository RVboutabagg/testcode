// About.jsx
// The About Us page. Shows team member cards and a mission statement.

import TeamMemberCard from "../Components/TeamMemberCard";

const teamMembers = [
  {
    name: "Johann",
    role: "Frontend Developer",
    bio: "Passionate about making Oakland streets safer for everyone.",
  },
  {
    name: "Ido",
    role: "Backend Developer",
    bio: "Loves working with data to help communities make better decisions.",
  },
  {
    name: "Your Name",
    role: "UI Designer",
    bio: "Focused on building tools that are easy to use and actually helpful.",
  },
];

function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">About Us</h1>
      <p className="text-sm text-gray-500 mb-8">
        Meet the team behind the Oakland Pothole Tracker.
      </p>

      {/* Team Members */}
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

      {/* Mission */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          We want to create an app which tracks data inputted by users regarding not only
          the location of potholes but the severity of them. This app will also provide
          users with information about what causes potholes, as well as how you can advocate
          to get them fixed. It will provide links to government websites as well as a map
          of Oakland that shows — depending on where you live — who your city council member
          is and their contact information.
        </p>
      </div>
    </div>
  );
}

export default About;