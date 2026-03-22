import React from "react";
import {
  IconUsers,
  IconBriefcase,
  IconStar,
  IconWorld
} from "@tabler/icons-react";

function Stats() {
  return (
    <section className="relative py-24 bg-mine-shaft-900 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/3 h-96 w-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 right-1/3 h-96 w-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Trusted by Professionals Worldwide
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Our platform connects talent and businesses across the globe,
            delivering success every day.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Stat 1 */}
          <div className="group p-8 rounded-2xl bg-mine-shaft-950 border border-white/5 text-center hover:border-indigo-500/40 transition">
            <div className="flex items-center justify-center h-14 w-14 mx-auto rounded-xl bg-indigo-500/20 text-indigo-400 mb-4">
              <IconUsers size={28} />
            </div>
            <h3 className="text-4xl font-extrabold">50K+</h3>
            <p className="mt-2 text-slate-400">Freelancers</p>
          </div>

          {/* Stat 2 */}
          <div className="group p-8 rounded-2xl bg-mine-shaft-950 border border-white/5 text-center hover:border-cyan-500/40 transition">
            <div className="flex items-center justify-center h-14 w-14 mx-auto rounded-xl bg-cyan-500/20 text-cyan-400 mb-4">
              <IconBriefcase size={28} />
            </div>
            <h3 className="text-4xl font-extrabold">10K+</h3>
            <p className="mt-2 text-slate-400">Jobs Posted</p>
          </div>

          {/* Stat 3 */}
          <div className="group p-8 rounded-2xl bg-mine-shaft-950 border border-white/5 text-center hover:border-indigo-500/40 transition">
            <div className="flex items-center justify-center h-14 w-14 mx-auto rounded-xl bg-indigo-500/20 text-indigo-400 mb-4">
              <IconStar size={28} />
            </div>
            <h3 className="text-4xl font-extrabold">4.9/5</h3>
            <p className="mt-2 text-slate-400">Average Rating</p>
          </div>

          {/* Stat 4 */}
          <div className="group p-8 rounded-2xl bg-mine-shaft-950 border border-white/5 text-center hover:border-cyan-500/40 transition">
            <div className="flex items-center justify-center h-14 w-14 mx-auto rounded-xl bg-cyan-500/20 text-cyan-400 mb-4">
              <IconWorld size={28} />
            </div>
            <h3 className="text-4xl font-extrabold">120+</h3>
            <p className="mt-2 text-slate-400">Countries</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats;
