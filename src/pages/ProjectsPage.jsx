import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const ProjectsPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-ananta-bg text-white">
            <SEO title="Selected Projects" description="Explore our case studies in narrative strategy, cultural engineering, and lasting influence." />
            {/* Header */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-ananta-gold uppercase tracking-widest text-xs font-semibold mb-6">Our Work</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">
                        Selected <span className="text-ananta-gold italic">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl font-light">
                        Case studies in narrative strategy, cultural engineering, and lasting influence.
                    </p>
                </motion.div>
            </section>

            {/* Projects Grid */}
            <section className="pb-32 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={`/projects/${project.id}`} className="group block h-full">
                                <article className="bg-white/5 border border-white/10 overflow-hidden hover:border-ananta-gold/50 transition-all duration-500 h-full flex flex-col">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={project.coverImage}
                                            alt={project.title}
                                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                                        {/* Overlay Icon */}
                                        <div className="absolute top-4 right-4 bg-ananta-bg/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            <ArrowUpRight size={20} className="text-ananta-gold" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-ananta-gold transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed flex-1 font-light">
                                            {project.shortDescription}
                                        </p>
                                        <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs tracking-widest uppercase">
                                            <span className="text-gray-500">View Case Study</span>
                                            <span className="text-ananta-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                                                &rarr;
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
