import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { maintainedPages } from '../data/maintained';

const MaintainedPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-ananta-bg text-white">
            {/* Header */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-ananta-gold uppercase tracking-widest text-xs font-semibold mb-6">Portfolio Maintenance</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">
                        Maintained <span className="text-ananta-gold italic">Pages</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl font-light">
                        A directory of active digital properties and narratives currently managed by Ananta.
                    </p>
                </motion.div>
            </section>

            {/* Grid */}
            <section className="pb-32 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {maintainedPages.map((page, index) => (
                        <motion.a
                            key={page.id}
                            href={page.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group block h-full"
                        >
                            <article className="bg-white/5 border border-white/10 overflow-hidden hover:border-ananta-gold/50 transition-all duration-500 h-full flex flex-col">
                                {/* Image Container */}
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <img
                                        src={page.thumbnail}
                                        alt={page.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>

                                    {/* Link Icon */}
                                    <div className="absolute top-4 right-4 bg-ananta-bg/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <ExternalLink size={18} className="text-ananta-gold" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-serif text-white mb-3 group-hover:text-ananta-gold transition-colors duration-300 flex items-center">
                                        {page.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed flex-1 font-light">
                                        {page.description}
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-white/5 flex items-center text-xs tracking-widest uppercase text-ananta-gold">
                                        <span>Visit Page</span>
                                        <ExternalLink size={12} className="ml-2" />
                                    </div>
                                </div>
                            </article>
                        </motion.a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MaintainedPage;
