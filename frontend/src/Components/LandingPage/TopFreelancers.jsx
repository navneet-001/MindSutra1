import React from "react";
import {
  IconStar,
  IconMapPin,
  IconBriefcase
} from "@tabler/icons-react";

const freelancers = [
  {
    name: "Aarav Sharma",
    role: "Full Stack Developer",
    rating: 4.9,
    jobs: "120 Jobs",
    location: "India",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Williams",
    role: "UI/UX Designer",
    rating: 4.8,
    jobs: "98 Jobs",
    location: "USA",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Daniel Lee",
    role: "Digital Marketer",
    rating: 4.9,
    jobs: "110 Jobs",
    location: "UK",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Neha Verma",
    role: "Content Writer",
    rating: 4.7,
    jobs: "85 Jobs",
    location: "India",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function TopFreelancers() {
  return (
    <section className="py-24 bg-mine-shaft-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Top Rated Freelancers
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Work with highly skilled professionals trusted by
            businesses around the world.
          </p>
        </div>

        {/* Freelancer Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {freelancers.map((freelancer, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-mine-shaft-900 border border-white/5 hover:border-indigo-500/40 transition"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition"></div>

              {/* Profile Image */}
              <img
                src={freelancer.img}
                alt={freelancer.name}
                className="relative h-24 w-24 rounded-full mx-auto object-cover border-4 border-mine-shaft-950"
              />

              {/* Info */}
              <div className="relative text-center mt-6">
                <h3 className="text-lg font-semibold">
                  {freelancer.name}
                </h3>
                <p className="text-sm text-slate-400">
                  {freelancer.role}
                </p>
              </div>

              {/* Stats */}
              <div className="relative mt-4 flex justify-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1 text-yellow-400">
                  <IconStar size={16} />
                  {freelancer.rating}
                </span>
                <span className="flex items-center gap-1">
                  <IconBriefcase size={16} />
                  {freelancer.jobs}
                </span>
              </div>

              {/* Location */}
              <div className="relative mt-2 flex justify-center items-center gap-1 text-xs text-slate-400">
                <IconMapPin size={14} />
                {freelancer.location}
              </div>

              {/* Button */}
              <div className="relative mt-6 text-center">
               
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TopFreelancers;
