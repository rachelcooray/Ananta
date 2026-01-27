import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <section id="philosophy" className="py-24 bg-ananta-bg relative border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
                >
                    {/* Header Column */}
                    <div className="md:col-span-5 text-left">
                        <p className="text-ananta-gold uppercase tracking-widest text-xs font-semibold mb-6">Our Philosophy</p>
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                            Why Choose <br /><span className="text-gray-500">Ananta?</span>
                        </h2>
                        <div className="w-16 h-[1px] bg-ananta-gold/50 mb-8"></div>

                        <p className="text-xl font-serif text-gray-200 italic leading-relaxed">
                            "Media, when executed well, does not announce itself. It resonates quietly, and it lasts."
                        </p>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-7 space-y-8 text-gray-400 font-light leading-relaxed text-lg text-left">
                        <p>
                            Ananta operates where media, strategy, and influence intersect. In a landscape where <span className="text-white font-normal border-b border-ananta-gold/30 pb-0.5">visibility is often mistaken for impact</span>, clarity is easily lost.
                        </p>
                        <p>
                            We treat media as a problem to be understood before it is expressed. By analyzing context, intent, and risk, we build frameworks that evaluate every creative decision.
                        </p>
                        <div className="bg-white/5 p-6 border-l-2 border-ananta-gold">
                            <p className="text-gray-300 text-base">
                                Our work is not reactive or attention-seeking; it is <span className="text-white font-normal">precise, structured, and grounded in purpose</span>. Creative direction emerges from clarity. We do not amplify noise - we shape narratives that settle naturally into their space.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Philosophy;
