import React from 'react';
import { motion } from 'framer-motion';

const FocusAreas = () => {
    const sectors = [
        "Luxury and lifestyle brands, including fine jewellery",
        "Sports and leisure, including golf and premium sporting initiatives",
        "Public policy, governance, and institutional communication",
        "NGOs and development-focused organisations",
        "Political communication and campaign environments"
    ];

    return (
        <section className="py-24 bg-ananta-bg relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-16 text-center">Sectors & Focus Areas</h2>
                <div className="space-y-8">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center group cursor-default border-b border-white/5 pb-6 last:border-0"
                        >
                            <span className="text-ananta-gold mr-6 text-xs transform rotate-45 group-hover:scale-125 transition-transform duration-300">◆</span>
                            <h3 className="text-xl md:text-2xl font-light text-gray-300 group-hover:text-white transition-colors leading-relaxed tracking-wide">{sector}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FocusAreas;
