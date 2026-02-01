import React from 'react';
import { motion } from 'framer-motion';
import Mission from '../components/Mission';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="pt-24 bg-ananta-bg min-h-screen">
            <SEO title="About Us" description="We are a media and narrative consultancy defining legacy in the digital age" />
            <Mission />
        </div>
    );
};

export default About;
