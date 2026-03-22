import React from "react";
import {
    IconShieldCheck,
    IconClock,
    IconUsers,
    IconHeadset
} from "@tabler/icons-react";

function WhyChooseUs() {
    return (
        <section className="py-24 bg-mine-shaft-900 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        Why Choose Us
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        We provide a secure, fast, and reliable platform
                        for freelancers and businesses to succeed together.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Feature 1 */}
                    <div className="group relative p-8 rounded-2xl bg-mine-shaft-950 border border-white/5 hover:border-indigo-500/40 transition">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition"></div>

                        <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-indigo-500/20 text-indigo-400 mb-6">
                            <IconShieldCheck size={28} />
                        </div>

                        <h3 className="relative text-xl font-semibold mb-2">
                            Secure Payments
                        </h3>
                        <p className="relative text-slate-400 text-sm">
                            Funds are protected with escrow until the work is successfully completed.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group relative p-8 rounded-2xl bg-mine-shaft-950 border border-white/5 hover:border-cyan-500/40 transition">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition"></div>

                        <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-cyan-500/20 text-cyan-400 mb-6">
                            <IconClock size={28} />
                        </div>

                        <h3 className="relative text-xl font-semibold mb-2">
                            Fast Hiring
                        </h3>
                        <p className="relative text-slate-400 text-sm">
                            Connect with skilled freelancers and start your project quickly.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group relative p-8 rounded-2xl bg-mine-shaft-950 border border-white/5 hover:border-indigo-500/40 transition">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition"></div>

                        <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-indigo-500/20 text-indigo-400 mb-6">
                            <IconUsers size={28} />
                        </div>

                        <h3 className="relative text-xl font-semibold mb-2">
                            Verified Talent
                        </h3>
                        <p className="relative text-slate-400 text-sm">
                            Work with trusted and verified freelancers across multiple industries.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="group relative p-8 rounded-2xl bg-mine-shaft-950 border border-white/5 hover:border-cyan-500/40 transition">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition"></div>

                        <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-cyan-500/20 text-cyan-400 mb-6">
                            <IconHeadset size={28} />
                        </div>

                        <h3 className="relative text-xl font-semibold mb-2">
                            24/7 Support
                        </h3>
                        <p className="relative text-slate-400 text-sm">
                            Our dedicated support team is always available to help you.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
