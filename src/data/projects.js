
// Placeholder images - using Ananta's existing visual style
// Ideally these would be specific project images
import heroBg from '../assets/hero-bg.png';
import missionVisual from '../assets/mission-visual.png';

export const projects = [
    {
        id: 'global-narrative-reset',
        title: 'Global Narrative Reset',
        shortDescription: 'Strategic repositioning for a legacy financial institution facing digital disruption.',
        fullDescription: `
            We partnered with a 100-year-old financial institution to redefine their public narrative in the age of decentralized finance. 
            
            The challenge was not just visual rebrand, but a complete overhaul of how they communicated trust, stability, and innovation. We conducted deep-dive workshops with leadership, analyzed market sentiment, and crafted a new "Trust in Motion" narrative framework that now guides all their external communications.
            
            This project resulted in a 40% increase in engagement with younger demographics and a successful launch of their new digital wealth platform.
        `,
        coverImage: heroBg,
        galleryImages: [missionVisual, heroBg],
        videoUrl: null,
        outcomes: [
            'Repositioned brand identity',
            'Developed "Trust in Motion" framework',
            'Launched digital wealth campaign'
        ],
        scope: 'Brand Strategy, Public Relations, Digital Campaign'
    },
    {
        id: 'cultural-diplomacy-campaign',
        title: 'Cultural Diplomacy Initiative',
        shortDescription: 'A multi-channel campaign to elevate national soft power through art and heritage.',
        fullDescription: `
            Ananta was commissioned to design a multimedia campaign showcasing the rich cultural heritage of a developing nation to a global audience.
            
            By moving beyond traditional tourism tropes and focusing on contemporary art and living heritage, we curated a series of digital exhibitions, documentary shorts, and influencer partnerships that highlighted the country's modern creative economy.
            
            The campaign reached over 2 million viewers globally and was featured in major international art publications.
        `,
        coverImage: missionVisual,
        galleryImages: [heroBg, missionVisual],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
        outcomes: [
            '2M+ Global Reach',
            'Featured in ArtForum & Monocle',
            'Increased cultural tourism interest'
        ],
        scope: 'Creative Direction, Video Production, Media Buying'
    },
    {
        id: 'tech-leadership-summit',
        title: 'Future Tech Leadership Summit',
        shortDescription: 'Curating the conversation for the next decade of ethical technology.',
        fullDescription: `
            We managed the narrative and content strategy for a global summit focused on ethical AI and sustainable technology.
            
            Our role involved refining the core themes, coaching keynote speakers to deliver compelling narratives, and managing real-time media relations during the event. We ensured that the complex technical discussions were accessible and impactful for a broader policy-making audience.
        `,
        coverImage: heroBg,
        galleryImages: [missionVisual],
        videoUrl: null,
        outcomes: [
            '150+ C-Level Attendees',
            'Coverage in TechCrunch & Wired',
            'Established ongoing policy working group'
        ],
        scope: 'Event Narrative, Speaker Coaching, Media Relations'
    }
];
