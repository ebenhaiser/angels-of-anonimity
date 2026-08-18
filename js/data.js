/* ============================================
   DATA
   ============================================ */

// Team Members
const TEAM = [
    {
        name: "Ebenhaiser Caprisiano",
        role: "IT / Software Development / Creative Technology",
        shortBio: "Software Developer & Creative Technologist",
        bio: "Focused on building scalable web applications and creative technology solutions.",
        image: "assets/images/eben.jpg",
        initials: "EC",
        socials: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com"
        }
    },
    {
        name: "Omega Patria",
        role: "IT / Technology / Backend",
        shortBio: "Technology Architect",
        bio: "Specializing in system design, backend development, and technical infrastructure.",
        image: "assets/images/omega.jpg",
        initials: "OP",
        socials: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com"
        }
    },
    {
        name: "Gilbert Ngilly",
        role: "IT / Multimedia / Design",
        shortBio: "Multimedia Specialist",
        bio: "Expert in multimedia design, video production, and creative content creation.",
        image: "assets/images/gilbert.jpg",
        initials: "GN",
        socials: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com"
        }
    }
];

// Expertise Categories
const EXPERTISE = [
    {
        category: "Software Development",
        skills: [
            "Web Development",
            "Application Development",
            "Backend Development",
            "Database Design",
            "API Development",
            "Automation"
        ]
    },
    {
        category: "IT & Technology",
        skills: [
            "System Development",
            "IT Solutions",
            "Data Management",
            "AI / Machine Learning",
            "Technical Research",
            "Infrastructure"
        ]
    },
    {
        category: "Multimedia",
        skills: [
            "Graphic Design",
            "Video Production",
            "Motion Graphics",
            "Creative Content",
            "Digital Media",
            "UI/UX Design"
        ]
    }
];

// Projects
const PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web",
        year: 2026,
        image: "assets/images/project-1.jpg",
        description: "Full-stack e-commerce platform with real-time inventory management and payment integration.",
        shortDesc: "Modern e-commerce solution",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        role: "Full Stack Development",
        link: "https://example.com"
    },
    {
        id: 2,
        title: "Mobile Analytics App",
        category: "Software",
        year: 2026,
        image: "assets/images/project-2.jpg",
        description: "Native mobile application for business analytics with real-time data visualization.",
        shortDesc: "Analytics dashboard mobile app",
        technologies: ["React Native", "Firebase", "Redux"],
        role: "Lead Development",
        link: "https://example.com"
    },
    {
        id: 3,
        title: "AI Data Processing",
        category: "AI",
        year: 2025,
        image: "assets/images/project-3.jpg",
        description: "Machine learning pipeline for automated data processing and predictive analysis.",
        shortDesc: "ML data processing system",
        technologies: ["Python", "TensorFlow", "Pandas"],
        role: "AI/ML Development",
        link: "https://example.com"
    },
    {
        id: 4,
        title: "Brand Documentary",
        category: "Multimedia",
        year: 2025,
        image: "assets/images/project-4.jpg",
        description: "Professional documentary video production and post-production for corporate branding.",
        shortDesc: "Professional video production",
        technologies: ["DaVinci Resolve", "Adobe Creative Suite"],
        role: "Creative Direction & Production",
        link: "https://example.com"
    },
    {
        id: 5,
        title: "CMS Management System",
        category: "Web",
        year: 2025,
        image: "assets/images/project-5.jpg",
        description: "Custom headless CMS with flexible content management and API-first architecture.",
        shortDesc: "Headless CMS platform",
        technologies: ["Next.js", "GraphQL", "PostgreSQL"],
        role: "Architecture & Development",
        link: "https://example.com"
    },
    {
        id: 6,
        title: "Design System UI Kit",
        category: "Creative",
        year: 2025,
        image: "assets/images/project-6.jpg",
        description: "Comprehensive design system and UI component library for enterprise applications.",
        shortDesc: "Enterprise UI design system",
        technologies: ["Figma", "React", "Storybook"],
        role: "Design & Development",
        link: "https://example.com"
    },
    {
        id: 7,
        title: "IoT Monitoring System",
        category: "Software",
        year: 2024,
        image: "assets/images/project-7.jpg",
        description: "Real-time IoT device monitoring and control system with cloud integration.",
        shortDesc: "IoT monitoring platform",
        technologies: ["Arduino", "AWS", "Node.js"],
        role: "Hardware & Software Integration",
        link: "https://example.com"
    },
    {
        id: 8,
        title: "Research Paper Automation",
        category: "Research",
        year: 2024,
        image: "assets/images/project-8.jpg",
        description: "Automated research paper analysis and categorization system using NLP.",
        shortDesc: "NLP research automation",
        technologies: ["Python", "NLP", "TensorFlow"],
        role: "Research & Development",
        link: "https://example.com"
    }
];

// Experience / Timeline
const EXPERIENCES = [
    {
        year: 2026,
        title: "International Tech Summit",
        organization: "Tech Conference 2026",
        description: "Presented innovations in web technology and received recognition for technical excellence."
    },
    {
        year: 2026,
        title: "AI Development Sprint",
        organization: "Innovation Lab",
        description: "Completed intensive AI/ML development sprint focusing on practical applications."
    },
    {
        year: 2025,
        title: "Digital Transformation Project",
        organization: "Corporate Client",
        description: "Led complete digital transformation initiative resulting in 40% efficiency improvement."
    },
    {
        year: 2025,
        title: "Open Source Contribution",
        organization: "GitHub Community",
        description: "Major contributions to popular open source projects with 500+ stars gained."
    },
    {
        year: 2024,
        title: "Team Formation",
        organization: "Angels of Anonymity",
        description: "Founded Angels of Anonymity with focus on IT and multimedia innovation."
    }
];

// Competitions
const COMPETITIONS = [
    {
        id: 1,
        title: "National Hackathon 2026",
        year: 2026,
        category: "Software Development",
        result: "Finalist",
        image: "assets/images/comp-1.jpg",
        description: "Competed in 48-hour hackathon with innovative project tackling social issues.",
        achievement: "Selected as finalist among 200+ teams"
    },
    {
        id: 2,
        title: "AI Innovation Challenge",
        year: 2025,
        category: "AI/ML",
        result: "Winner",
        image: "assets/images/comp-2.jpg",
        description: "Won AI competition with predictive analytics solution for environmental monitoring.",
        achievement: "First place in national AI competition"
    },
    {
        id: 3,
        title: "Creative Design Competition",
        year: 2025,
        category: "Design & Multimedia",
        result: "Top 10",
        image: "assets/images/comp-3.jpg",
        description: "Showcased multimedia and design expertise in prestigious creative competition.",
        achievement: "Top 10 in Asia-Pacific region"
    },
    {
        id: 4,
        title: "Tech Innovation Expo",
        year: 2024,
        category: "Technology",
        result: "Participant",
        image: "assets/images/comp-4.jpg",
        description: "Presented multiple projects showcasing team's technical capabilities.",
        achievement: "Attracted interest from major tech companies"
    },
    {
        id: 5,
        title: "Web Development Championship",
        year: 2024,
        category: "Web Development",
        result: "Finalist",
        image: "assets/images/comp-5.jpg",
        description: "Competed in international web development competition with full-stack application.",
        achievement: "Finalist in international championship"
    }
];

// Contact Methods
const CONTACT_METHODS = [
    {
        type: "Email",
        label: "Email",
        icon: "✉️",
        link: "mailto:contact@angelsofanonymity.com"
    },
    {
        type: "GitHub",
        label: "GitHub",
        icon: "🐙",
        link: SITE_CONFIG.social.github
    },
    {
        type: "LinkedIn",
        label: "LinkedIn",
        icon: "💼",
        link: SITE_CONFIG.social.linkedin
    },
    {
        type: "Instagram",
        label: "Instagram",
        icon: "📷",
        link: SITE_CONFIG.social.instagram
    },
    {
        type: "YouTube",
        label: "YouTube",
        icon: "▶️",
        link: SITE_CONFIG.social.youtube
    },
    {
        type: "WhatsApp",
        label: "WhatsApp",
        icon: "💬",
        link: SITE_CONFIG.social.whatsapp
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TEAM,
        EXPERTISE,
        PROJECTS,
        EXPERIENCES,
        COMPETITIONS,
        CONTACT_METHODS
    };
}
