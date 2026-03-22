import React from "react";
import {
  IconCode,
  IconPalette,
  IconWriting,
  IconDeviceMobile,
  IconChartBar,
  IconCamera
} from "@tabler/icons-react";

const categories = [
  {
    title: "Web Development",
    desc: "React, Node, Next, MERN",
    icon: IconCode,
    jobs: "2.4k Jobs",
  },
  {
    title: "Graphic Design",
    desc: "UI/UX, Logo, Branding",
    icon: IconPalette,
    jobs: "1.8k Jobs",
  },
  {
    title: "Content Writing",
    desc: "Blogs, SEO, Copywriting",
    icon: IconWriting,
    jobs: "1.2k Jobs",
  },
  {
    title: "Mobile App",
    desc: "Android, iOS, Flutter",
    icon: IconDeviceMobile,
    jobs: "950 Jobs",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, Ads, Social Media",
    icon: IconChartBar,
    jobs: "1.1k Jobs",
  },
  {
    title: "Photography",
    desc: "Product, Event, Editing",
    icon: IconCamera,
    jobs: "620 Jobs",
  },
];

function Categories() {
  return (
    <section className="py-24 bg-mine-shaft-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Explore Popular Categories
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Find projects that match your skills and passion.
            Choose from the most in-demand freelance categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-mine-shaft-900 border border-white/5 hover:border-indigo-500/40 transition duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition"></div>

                {/* Icon */}
                <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-indigo-500/20 text-indigo-400 mb-6">
                  <Icon size={28} />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold">
                  {cat.title}
                </h3>
                <p className="relative mt-2 text-slate-400">
                  {cat.desc}
                </p>

                {/* Jobs Count */}
                <div className="relative mt-4 text-sm font-medium text-cyan-400">
                  {cat.jobs}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Categories;
