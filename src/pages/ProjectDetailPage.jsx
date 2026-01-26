import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const ProjectDetailPage = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-ananta-bg text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-serif text-ananta-gold mb-4">Project Not Found</h2>
                    <Link to="/projects" className="text-gray-400 hover:text-white underline">Back to Projects</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-ananta-bg text-white min-h-screen">
            <SEO title={project.title} description={project.shortDescription} />
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                <img
                    src={project.coverImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ananta-bg via-ananta-bg/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                        <Link to="/projects" className="inline-flex items-center text-ananta-gold mb-6 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">
                            <ArrowLeft size={16} className="mr-2" /> Back to Projects
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-serif text-white max-w-4xl leading-tight"
                        >
                            {project.title}
                        </motion.h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Narrative */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-lg prose-invert max-w-none text-gray-300 font-light leading-loose"
                        >
                            {/* Rendering descriptions with newlines as paragraphs */}
                            {project.fullDescription.split('\n').map((paragraph, idx) => (
                                paragraph.trim() && <p key={idx} className="mb-6">{paragraph.trim()}</p>
                            ))}
                        </motion.div>

                        {/* Local Video File */}
                        {project.videoFile && (
                            <div className="mt-16 bg-black aspect-video rounded-sm overflow-hidden border border-white/10">
                                <video
                                    src={project.videoFile}
                                    controls
                                    className="w-full h-full"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}

                        {/* External Video Embed */}
                        {!project.videoFile && project.videoUrl && (
                            <div className="mt-16 bg-black aspect-video rounded-sm overflow-hidden border border-white/10">
                                <iframe
                                    src={project.videoUrl}
                                    title="Project Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}

                        {/* Image Gallery */}
                        {project.galleryImages && project.galleryImages.length > 0 && (
                            <div className="mt-16 space-y-8">
                                {project.galleryImages.map((img, idx) => (
                                    <div key={idx} className="relative overflow-hidden group">
                                        <img
                                            src={img}
                                            alt={`Gallery ${idx + 1}`}
                                            className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Video Gallery */}
                        {project.galleryVideos && project.galleryVideos.length > 0 && (
                            <div className="mt-16 space-y-8">
                                <h3 className="text-ananta-gold uppercase tracking-widest text-xs font-bold mb-4">Additional Media</h3>
                                {project.galleryVideos.map((vid, idx) => (
                                    <div key={idx} className="relative bg-black aspect-video rounded-sm overflow-hidden border border-white/10">
                                        <video
                                            src={vid}
                                            controls
                                            className="w-full h-full"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sidebar Metadata */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-12 border-l border-white/10 pl-8">

                            <div>
                                <h3 className="text-ananta-gold uppercase tracking-widest text-xs font-bold mb-4">Scope of Work</h3>
                                <p className="text-lg text-white font-serif italic">{project.scope}</p>
                            </div>

                            {project.outcomes && (
                                <div>
                                    <h3 className="text-ananta-gold uppercase tracking-widest text-xs font-bold mb-4">Project Outcomes</h3>
                                    <ul className="space-y-3">
                                        {project.outcomes.map((outcome, idx) => (
                                            <li key={idx} className="text-gray-400 font-light text-sm flex items-start">
                                                <span className="text-ananta-gold mr-2">•</span>
                                                {outcome}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Interested in similar results?</p>
                                <Link to="/work-with-us" className="text-white hover:text-ananta-gold transition-colors font-serif text-lg border-b border-white/20 pb-1">
                                    Start a Conversation
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetailPage;
