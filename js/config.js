/* ============================================
   CONFIGURATION
   ============================================ */

const SITE_CONFIG = {
    siteName: "Angels of Anonymity",
    tagline: "IT & Multimedia Team",
    year: 2026,
    description: "Building technology, creating experiences, and turning ideas into reality.",

    // Social media links
    social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        email: "contact@angelsofanonymity.com",
        whatsapp: "https://wa.me/",
        youtube: "https://youtube.com"
    },

    // Navigation
    nav: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Team', href: '#team' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Competitions', href: '#competitions' },
        { name: 'Contact', href: '#contact' }
    ],

    // Statistics
    stats: {
        teamMembers: 3,
        projects: 8,
        competitions: 5,
        yearsExperience: 3
    },

    // Animation settings
    animations: {
        enableParallax: true,
        enableParticles: true,
        enableScrollReveal: true,
        reduceAnimationsOnMobile: true
    },

    // Performance settings
    lazyLoadImages: true,
    enableSmoothScroll: true
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
