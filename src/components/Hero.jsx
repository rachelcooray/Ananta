import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ananta-bg">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-ananta-bg/90 via-ananta-bg/50 to-ananta-bg"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-ananta-gold text-sm md:text-base tracking-[0.4em] uppercase mb-8 font-medium"
                >
                    Media & Narrative Consultancy
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-8 leading-tight"
                >
                    We Build <span className="italic text-ananta-gold">Presence.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    Strategy. Culture. Public Influence. <br className="hidden md:block" />
                    We do not chase visibility. We design narratives that endure.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12"
                >
                    <Link to="/philosophy" className="group inline-flex items-center gap-3 border border-ananta-gold/50 text-ananta-gold px-10 py-4 hover:bg-ananta-gold hover:text-ananta-bg transition-all duration-300 uppercase tracking-widest text-xs font-semibold">
                        Discover The Narrative
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 text-xs tracking-widest uppercase"
            >
                Scroll to Explore
            </motion.div>
        </section>
    );
};

export default Hero;
