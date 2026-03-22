import React from "react";
import {
  IconUserPlus,
  IconSearch,
  IconMessageDots,
  IconCreditCard
} from "@tabler/icons-react";

function HowItWorks() {
  return (
    <section className="py-24 bg-mine-shaft-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            How It Works
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Simple steps to hire top talent or find work you love.
            Get started in minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Step 1 */}
          <div className="relative group p-8 rounded-2xl bg-mine-shaft-900 border border-white/5 hover:border-indigo-500/40 transition">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-indigo-500/20 text-indigo-400 mb-6">
              <IconUserPlus size={28} />
            </div>

            <h3 className="relative text-xl font-semibold mb-2">
              Create Account
            </h3>
            <p className="relative text-slate-400 text-sm">
              Sign up and complete your profile to start your freelance journey.
            </p>

            <span className="absolute top-4 right-6 text-5xl font-extrabold text-white/5">
              1
            </span>
          </div>

          {/* Step 2 */}
          <div className="relative group p-8 rounded-2xl bg-mine-shaft-900 border border-white/5 hover:border-indigo-500/40 transition">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-cyan-500/20 text-cyan-400 mb-6">
              <IconSearch size={28} />
            </div>

            <h3 className="relative text-xl font-semibold mb-2">
              Find or Post Work
            </h3>
            <p className="relative text-slate-400 text-sm">
              Browse jobs or post projects that match your business needs.
            </p>

            <span className="absolute top-4 right-6 text-5xl font-extrabold text-white/5">
              2
            </span>
          </div>

          {/* Step 3 */}
          <div className="relative group p-8 rounded-2xl bg-mine-shaft-900 border border-white/5 hover:border-indigo-500/40 transition">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-indigo-500/20 text-indigo-400 mb-6">
              <IconMessageDots size={28} />
            </div>

            <h3 className="relative text-xl font-semibold mb-2">
              Collaborate
            </h3>
            <p className="relative text-slate-400 text-sm">
              Chat, share files, and work together with ease and transparency.
            </p>

            <span className="absolute top-4 right-6 text-5xl font-extrabold text-white/5">
              3
            </span>
          </div>

          {/* Step 4 */}
          <div className="relative group p-8 rounded-2xl bg-mine-shaft-900 border border-white/5 hover:border-indigo-500/40 transition">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-cyan-500/20 text-cyan-400 mb-6">
              <IconCreditCard size={28} />
            </div>

            <h3 className="relative text-xl font-semibold mb-2">
              Get Paid Securely
            </h3>
            <p className="relative text-slate-400 text-sm">
              Payments are released safely once the work is completed.
            </p>

            <span className="absolute top-4 right-6 text-5xl font-extrabold text-white/5">
              4
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
