import React from 'react';
import { motion } from 'framer-motion';
import missionVisual from '../assets/mission-visual.png';

const Mission = () => {
    return (
        <section id="mission" className="py-24 bg-ananta-bg text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 border border-ananta-gold/20 translate-x-4 translate-y-4"></div>
                        <img src={missionVisual} alt="Abstract Architecture" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 opacity-80" />
                        <div className="absolute bottom-8 left-8 bg-ananta-bg/90 backdrop-blur-md p-6 border border-white/10 max-w-xs">
                            <p className="font-serif italic text-white text-lg">"Clarity is power."</p>
                        </div>
                    </motion.div>

                    {/* Content Column (Original Left Content) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">
                            Who Are <span className="text-ananta-gold">We?</span>
                        </h2>
                        <div className="w-20 h-[1px] bg-ananta-gold mb-10"></div>

                        {/* Lead Statement */}
                        <p className="text-white text-xl md:text-2xl font-serif leading-relaxed mb-12">
                            Ananta is a media and narrative consultancy working at the intersection of strategy, culture and public influence.
                        </p>

                        {/* Structured Points */}
                        <div className="space-y-8 border-l border-white/10 pl-6">
                            <div className="relative">
                                <h4 className="text-ananta-gold uppercase tracking-wider text-xs font-semibold mb-2">Our Partnerships</h4>
                                <p className="text-gray-400 text-base leading-relaxed font-light">
                                    We partner with institutions, leaders, and brands that view media not as content, but as a tool for positioning, trust, and lasting credibility.
                                </p>
                            </div>

                            <div className="relative">
                                <h4 className="text-ananta-gold uppercase tracking-wider text-xs font-semibold mb-2">Our Focus</h4>
                                <p className="text-gray-400 text-base leading-relaxed font-light">
                                    We build communication systems designed to endure. We prioritize strategy, creative direction, and media execution that lasts across periods of change.
                                </p>
                            </div>

                            <div className="relative">
                                <h4 className="text-ananta-gold uppercase tracking-wider text-xs font-semibold mb-2">Our Discipline</h4>
                                <p className="text-gray-400 text-base leading-relaxed font-light">
                                    From inception to long-term management, we treat media as a discipline defined by clarity, intention, and restraint.
                                </p>
                            </div>
                        </div>

                        <blockquote className="text-2xl font-serif text-white mt-12 pt-8 border-t border-white/10">
                            <span className="text-ananta-gold">We build presence.</span>
                        </blockquote>
                    </motion.div>

                    {/* Right Content - Founder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative bg-white/5 p-10 border border-white/10"
                    >
                        <h3 className="text-ananta-gold font-serif text-3xl mb-2">Kavisha Ratnayaka</h3>
                        <p className="text-gray-500 text-sm uppercase mb-8 tracking-widest">Founder</p>

                        <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                            <p>
                                With over a decade of experience in media and strategic communication, Kavisha founded Ananta to provide narrative architecture that transcends traditional PR. Having worked with global brands and political figures, he understands that true influence is not about volume - it is about precision.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
