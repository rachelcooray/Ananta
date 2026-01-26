import React from 'react';
import Hero from '../components/Hero';
import Formula from '../components/Formula';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="bg-ananta-bg text-white">
            <SEO title="Home" description="Ananta is a media and narrative consultancy working at the intersection of strategy, culture, and influence." />
            <Hero />

            {/* Brief Introduction */}
            <section className="py-24 max-w-4xl mx-auto px-6 text-center">
                <p className="text-ananta-gold uppercase tracking-widest text-xs font-semibold mb-6">Who We Are</p>
                <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                    A media and narrative consultancy working at the intersection of <span className="text-ananta-gold">strategy, culture, and influence.</span>
                </h2>
                <Link to="/about" className="text-sm border-b border-white/30 pb-1 hover:text-ananta-gold hover:border-ananta-gold transition-colors">Read Our Story</Link>
            </section>

            {/* Founder Excerpt */}
            <section className="py-16 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="text-gray-400 font-light text-lg italic mb-6">
                        "True influence is not about volume - it is about precision. We do not design for the feed; we design for the legacy."
                    </p>
                    <p className="text-white font-serif">Kavisha Ratnayaka</p>
                    <p className="text-ananta-gold text-xs uppercase tracking-widest mt-2">Founder</p>
                </div>
            </section>

            <Formula compact={true} />

            {/* Philosophy Pull Quote */}
            <section className="py-32 bg-ananta-bg relative border-t border-white/5 text-center px-6">
                <blockquote className="max-w-4xl mx-auto">
                    <p className="text-2xl md:text-4xl font-serif italic text-white/90 leading-relaxed">
                        "Media, when executed well, does not announce itself. <br className="hidden md:block" />
                        It resonates quietly, and it lasts."
                    </p>
                </blockquote>
            </section>

            {/* Contact CTA */}
            <section className="py-24 bg-ananta-gold text-ananta-bg text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to define your narrative?</h2>
                    <Link to="/work-with-us" className="inline-block border border-ananta-bg px-12 py-4 text-ananta-bg uppercase tracking-widest text-xs font-bold hover:bg-ananta-bg hover:text-ananta-gold transition-colors duration-300">
                        Work With Ananta
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
