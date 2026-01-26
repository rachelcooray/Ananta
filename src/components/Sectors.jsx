import React from 'react';
import { motion } from 'framer-motion';

const Sectors = () => {
    const sectors = [
        "Luxury and lifestyle brands, including fine jewellery",
        "Sports and leisure, including golf and premium sporting initiatives",
        "Public policy, governance, and institutional communication",
        "NGOs and development-focused organisations",
        "Political communication and campaign environments"
    ];

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Sectors Column */}
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-10">Sectors & Focus Areas</h2>
                        <div className="space-y-6">
                            {sectors.map((sector, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center group cursor-default"
                                >
                                    <span className="text-ananta-gold mr-6 text-xs transform rotate-45 group-hover:scale-125 transition-transform duration-300">◆</span>
                                    <h3 className="text-xl font-light text-gray-300 group-hover:text-white transition-colors leading-relaxed tracking-wide">{sector}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Engagement Column */}
                    <div className="bg-white/[0.03] p-10 rounded-sm border border-white/5">
                        <h2 className="text-3xl font-serif text-white mb-8">Working With Ananta</h2>
                        <ul className="space-y-8">
                            {engagements.map((item, index) => (
                                <li key={index} className="block">
                                    <h4 className="text-ananta-gold text-lg mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Sectors;
