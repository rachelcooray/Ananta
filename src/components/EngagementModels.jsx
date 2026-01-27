import React from 'react';
import { motion } from 'framer-motion';

const EngagementModels = () => {
    const engagements = [
        {
            title: "Retainer-Based Advisory",
            desc: "Ongoing strategic and creative support for brands, institutions, or leaders requiring sustained narrative control and media management."
        },
        {
            title: "Campaign-Based Engagements",
            desc: "Each engagement is tailored. Scope follows strategy, not the other way around. Focused execution for specific initiatives."
        },
        {
            title: "Curated Media Systems",
            desc: "Bespoke communication systems designed from the ground up. These engagements focus on architecture - brand, narrative, creative, and platform logic - handed over for long-term use or internal deployment."
        }
    ];

    return (
        <section className="py-24 bg-ananta-bg relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-ananta-gold uppercase tracking-widest text-xs font-semibold mb-6 text-center">Work With Us</p>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-16 text-center">Working With Ananta</h2>
                <div className="grid gap-12">
                    {engagements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/[0.02] p-8 md:p-12 border border-white/5 hover:border-ananta-gold/30 transition-colors"
                        >
                            <h4 className="text-ananta-gold text-2xl font-serif mb-4">{item.title}</h4>
                            <p className="text-gray-400 text-lg leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngagementModels;
