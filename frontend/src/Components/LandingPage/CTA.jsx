import React from "react";
import { IconRocket, IconBriefcase } from "@tabler/icons-react";

function CTA() {
  return (
    <section className="relative py-24 bg-mine-shaft-900 text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-white/10 text-sm font-medium mb-6">
          <IconRocket size={16} />
          Start Your Journey Today
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Ready to <span className="text-indigo-400">Grow Your Career</span> <br />
          or <span className="text-cyan-400">Hire Top Talent</span>?
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          Join thousands of freelancers and businesses already
          building success together on our platform.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 font-semibold transition">
            Join as Freelancer
          </button>

          <button className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 font-semibold transition flex items-center gap-2">
            <IconBriefcase size={18} />
            Post a Job
          </button>
        </div>

        {/* Trust Line */}
        <p className="mt-8 text-sm text-slate-400">
          Free to join • No hidden charges • Secure payments
        </p>

      </div>
    </section>
  );
}

export default CTA;
