# Angels of Anonymity — IT & Multimedia Team Website

A modern, interactive website showcasing the Angels of Anonymity team's IT and multimedia capabilities.

## Features

✦ **Modern Design**
- Clean, minimal aesthetic with gradient accents
- Glassmorphism effects
- Smooth animations and transitions
- Responsive design (mobile-first)

✦ **Interactive Components**
- Dynamic team member cards with social links
- Project filtering system
- Interactive timeline for experience
- Competition showcase with achievements
- Project modal with detailed information

✦ **Performance Optimized**
- 100% static frontend
- No external dependencies (vanilla JavaScript)
- Lazy image loading
- Smooth scroll behavior
- Optimized animations using CSS transforms

✦ **Accessibility**
- Semantic HTML
- Keyboard navigation
- Focus states
- ARIA labels where needed
- Reduced motion support

✦ **SEO Ready**
- Meta tags and Open Graph
- Semantic headings
- Alt text for images
- Schema markup ready

## Project Structure

```
angels-of-anonymity-web/
│
├── index.html              # Main HTML file
├── README.md              # This file
│
├── css/
│   ├── style.css          # Main styles
│   ├── animations.css     # Animation definitions
│   └── responsive.css     # Responsive breakpoints
│
├── js/
│   ├── config.js          # Configuration & settings
│   ├── data.js            # Content data (team, projects, etc.)
│   ├── components.js      # Component rendering functions
│   ├── animations.js      # Animation & interaction handlers
│   └── app.js             # Main application initialization
│
└── assets/
    ├── images/            # Image assets
    │   ├── team/         # Team member photos
    │   ├── projects/     # Project screenshots
    │   └── competitions/ # Competition photos
    └── icons/            # Icon assets
```

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/angels-of-anonymity-web.git
cd angels-of-anonymity-web
```

2. Open `index.html` in your browser or serve with a local HTTP server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000`

## Configuration

Edit `js/config.js` to customize:
- Site name and tagline
- Social media links
- Navigation menu
- Statistics
- Animation settings

## Adding Content

### Adding Team Members
Edit `js/data.js` and add to `TEAM` array:
```javascript
{
    name: "Your Name",
    role: "Your Role",
    bio: "Your bio",
    image: "assets/images/your-photo.jpg",
    initials: "YN",
    socials: { ... }
}
```

### Adding Projects
Edit `js/data.js` and add to `PROJECTS` array:
```javascript
{
    id: X,
    title: "Project Title",
    category: "Web",
    year: 2026,
    image: "assets/images/project-X.jpg",
    description: "Full description",
    technologies: ["Tech1", "Tech2"],
    ...
}
```

### Adding Competitions
Edit `js/data.js` and add to `COMPETITIONS` array with similar structure.

### Adding Experience/Timeline
Edit `js/data.js` and add to `EXPERIENCES` array:
```javascript
{
    year: 2026,
    title: "Event Title",
    organization: "Organization Name",
    description: "Event description"
}
```

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-accent: #00d4ff;
    --color-accent-secondary: #7c3aed;
    ...
}
```

### Fonts
Currently uses:
- Headings: Space Grotesk
- Body: Inter

Change in `index.html` or `css/style.css`

### Animations
Control animation settings in `js/config.js`:
```javascript
animations: {
    enableParallax: true,
    enableParticles: true,
    enableScrollReveal: true
}
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile

## Performance

### Target Metrics
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 90+
- Lighthouse Best Practices: 90+
- Lighthouse SEO: 90+

### Optimization
- Images: Use WebP/AVIF formats with fallbacks
- CSS: Minify for production
- JavaScript: Minify and combine files
- Fonts: Only load used weights/styles

## Deployment

### Options
1. **GitHub Pages** - Free hosting for GitHub repositories
2. **Netlify** - Continuous deployment from GitHub
3. **Vercel** - Optimized for static sites
4. **Cloudflare Pages** - Global CDN hosting

### GitHub Pages Deployment
```bash
git add .
git commit -m "Deploy website"
git push origin main
```

Then enable GitHub Pages in repository settings.

## Features to Implement (Phase 2)

- [ ] Project detail pages
- [ ] Advanced gallery system
- [ ] Competition certificates display
- [ ] Dark/light mode toggle
- [ ] Interactive 3D elements
- [ ] Blog/journal section
- [ ] Case studies
- [ ] Client testimonials
- [ ] Contact form with backend
- [ ] Newsletter subscription

## API Integration (Optional)

To connect with a backend:

1. Update `config.js` with API endpoints
2. Modify component rendering functions to fetch data
3. Implement error handling and loading states
4. Update CORS settings on backend

Example:
```javascript
async function fetchProjects() {
    const response = await fetch(SITE_CONFIG.api.projects);
    const projects = await response.json();
    renderProjects(projects);
}
```

## SEO Tips

- Update meta tags in `index.html`
- Submit sitemap to Google Search Console
- Add canonical URLs
- Optimize image alt text
- Use schema.org markup for structured data
- Create robots.txt and sitemap.xml

## Security

- Enable HTTPS
- Set security headers (CSP, X-Frame-Options, etc.)
- Sanitize any user inputs
- Validate data on backend
- Keep dependencies updated

## Accessibility

- Use semantic HTML
- Test with screen readers
- Ensure keyboard navigation
- Maintain color contrast (WCAG AA)
- Provide alt text for all images
- Test with accessibility tools

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2026 Angels of Anonymity. All rights reserved.

## Support

For issues, questions, or suggestions:
- Email: contact@angelsofanonymity.com
- GitHub Issues: [Create an issue]

## Changelog

### Version 1.0.0 (Initial Release)
- Core website structure
- Team section with member cards
- Project portfolio with filtering
- Experience timeline
- Competition showcase
- Contact section
- Fully responsive design
- Animation system
- Accessibility support

---

Built with curiosity & caffeine. ✦
