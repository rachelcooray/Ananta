import React from 'react';
import Philosophy from '../components/Philosophy';
import SEO from '../components/SEO';

const PhilosophyPage = () => {
    return (
        <div className="pt-24 bg-ananta-bg min-h-screen">
            <SEO title="Philosophy" description="True influence is not about volume - it is about precision." />
            <Philosophy />
        </div>
    );
};

export default PhilosophyPage;
