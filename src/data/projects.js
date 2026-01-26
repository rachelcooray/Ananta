/**
 * ==========================================
 * HOW TO ADD A NEW PROJECT
 * ==========================================
 * 1. Copy the structure of an existing object between { and }.
 * 2. Paste it into the `projects` array below.
 * 3. Update the fields:
 *    - id: A unique name (e.g., 'new-project-name'). Used in the URL.
 *    - title: Visible project name.
 *    - shortDescription: One sentence summary for the list page.
 *    - fullDescription: Detailed text. Use `\n` or breaks for paragraphs.
 *    - coverImage: Import an image at the top and use the variable name here.
 *    - galleryImages: An array of imported images [img1, img2].
 *    - videoUrl: Optional YouTube embed URL (or null).
 *    - videoFile: Optional imported local video file (e.g., .mp4). Takes precedence over videoUrl if both are present.
 *    - outcomes: Array of bullet points ['Outcome 1', 'Outcome 2'].
 *    - scope: String listing services provided.
 */

// Placeholder images - using Ananta's existing visual style
// Ideally these would be specific project images
import heroBg from '../assets/hero-bg.png';
import missionVisual from '../assets/mission-visual.png';

// Valentina Project Assets
import valentina1 from '../assets/projects/Valentina/valentina1.mp4';
import valentina2 from '../assets/projects/Valentina/valentina2.mp4';
import valentina3 from '../assets/projects/Valentina/valentina3.mp4';
import valentina4 from '../assets/projects/Valentina/valentina4.mp4';
import valentina5 from '../assets/projects/Valentina/valentina5.mp4';

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
        videoFile: null,
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
        videoFile: null,
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
        videoFile: null,
        outcomes: [
            '150+ C-Level Attendees',
            'Coverage in TechCrunch & Wired',
            'Established ongoing policy working group'
        ],
        scope: 'Event Narrative, Speaker Coaching, Media Relations'
    },
    {
        id: 'valentina',
        title: 'Valentina',
        shortDescription: 'Project Valentina showcasing our latest multimedia work.',
        fullDescription: `
            A collection of visual narratives and digital storytelling for Valentina.
            
            This project features a series of high-impact video productions demonstrating our capability in creating immersive brand experiences.
        `,
        coverImage: heroBg, // Placeholder
        galleryImages: [], // No images provided yet
        videoUrl: null,
        videoFile: valentina1,
        galleryVideos: [valentina2, valentina3, valentina4, valentina5],
        outcomes: [
            'Multimedia Content Production',
            'Brand Storytelling',
            'Visual Identity'
        ],
        scope: 'Video Production, Creative Direction'
    }
];
