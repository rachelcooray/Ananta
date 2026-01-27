import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Strategy & Narrative Architecture",
        description: "We define logic before creative. From message frameworks to crisis response, we ensure communication is coherent, credible, and aligned with long-term objectives."
    },
    {
        title: "Creative & Brand Systems",
        description: "We design systems, not just assets. Our focus is on consistency and refinement, ensuring every visual output sits within a broader structure designed to scale."
    },
    {
        title: "Media Execution & Amplification",
        description: "We execute selectively and deliberately. This includes social media management, campaign rollouts, content ecosystems, and performance-led amplification. Execution is guided by strategy, not volume. We prioritise precision over noise."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-16 md:py-24 bg-ananta-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <p className="text-ananta-gold uppercase tracking-widest text-xs font-semibold mb-6">Our Services</p>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Mandate</h2>
                    <p className="text-gray-400 max-w-2xl">Strategy, Creative, and Execution - Defined by purpose.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group cursor-default"
                        >
                            <div className="text-6xl font-serif text-white/5 group-hover:text-ananta-gold/20 transition-colors duration-500 mb-6 font-light">
                                0{index + 1}
                            </div>

                            <div className="relative pl-6 border-l border-white/10 group-hover:border-ananta-gold transition-colors duration-500">
                                <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-ananta-gold transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 font-light leading-relaxed text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
