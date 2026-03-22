import { IconBriefcase, IconRocket, IconUsers } from "@tabler/icons-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-sm font-medium mb-6">
            <IconRocket size={16} />
            India’s Smart Freelance Platform
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Where <span className="text-indigo-400">Talent</span> Meets <br />
            <span className="text-cyan-400">Opportunity</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            Hire top freelancers or find high-paying projects.
            Simple, fast, and secure platform built for your success.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 font-semibold transition">
              Find Work
            </button>
            <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 font-semibold transition">
              Hire Talent
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <IconUsers size={18} />
              50K+ Freelancers
            </div>
            <div className="flex items-center gap-2">
              <IconBriefcase size={18} />
              10K+ Jobs Posted
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
          <img
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051"
            alt="Freelancer Working"
            className="relative rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
