import React from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, PencilRuler, Zap, BarChart3 } from 'lucide-react';

const steps = [
    {
        icon: ScanSearch,
        title: "Diagnosis",
        desc: "We begin by understanding context—audience, power dynamics, reputational risk, and strategic intent. This phase defines what must be said, what should not be said, and where communication must sit."
    },
    {
        icon: PencilRuler,
        title: "Architecture",
        desc: "We design the narrative and creative system: positioning, visual language, message hierarchy and platform logic. This forms the foundation for all downstream work."
    },
    {
        icon: Zap,
        title: "Execution",
        desc: "We produce and deploy content, campaigns, and media interventions in line with the agreed architecture. Output is tightly controlled and purpose-driven."
    },
    {
        icon: BarChart3,
        title: "Sustainment",
        desc: "Where required, we monitor performance, refine narratives, and maintain consistency over time—ensuring that communication remains credible and aligned as contexts evolve."
    }
];

const Formula = ({ compact = false }) => {
    return (
        <section id="formula" className="py-20 md:py-32 bg-ananta-bg relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ananta-gold/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <p className="text-ananta-gold uppercase tracking-[0.2em] mb-4 text-xs font-medium">Our Methodology</p>
                    <h2 className="text-4xl md:text-6xl font-serif text-white">The Ananta Formula</h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[45px] left-0 w-full h-[1px] bg-white/10"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                className="relative group"
                            >
                                {/* Step Indicator */}
                                <div className="mb-8 relative flex items-center justify-center lg:justify-start">
                                    <div className="w-24 h-24 rounded-full bg-ananta-bg border border-white/10 group-hover:border-ananta-gold transition-colors duration-500 relative z-10 flex items-center justify-center">
                                        <span className="font-serif text-3xl text-white/30 group-hover:text-ananta-gold transition-colors duration-500">0{index + 1}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center lg:text-left">
                                    <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-ananta-gold transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    {!compact && (
                                        <p className="text-gray-400 text-sm leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                            {step.desc}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Formula;
