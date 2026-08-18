/* ============================================
   ANIMATIONS & INTERACTIONS
   ============================================ */

// Scroll Reveal using Intersection Observer
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('navMenu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.getElementById('menuToggle').classList.remove('active');
                }
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Parallax effect for hero section (desktop only)
function initParallax() {
    if (window.innerWidth < 768) return; // Disable on mobile

    const parallaxElements = document.querySelectorAll('.blob-1, .blob-2');
    
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        parallaxElements.forEach((el, index) => {
            const moveX = (x - 0.5) * (20 * (index + 1));
            const moveY = (y - 0.5) * (20 * (index + 1));
            el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// Cursor interaction effect
function initCursorEffect() {
    if (window.innerWidth < 768) return; // Disable on mobile

    const createCursorStyle = () => {
        if (document.getElementById('cursorStyle')) return;
        
        const style = document.createElement('style');
        style.id = 'cursorStyle';
        style.innerHTML = `
            body {
                cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%2300d4ff" stroke-width="2"><circle cx="12" cy="12" r="8"></circle><path d="M12 2v20M2 12h20"></path></svg>') 12 12, auto;
            }
        `;
        document.head.appendChild(style);
    };

    createCursorStyle();

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .team-card, .expertise-card, .competition-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'pointer';
        });
        el.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'auto';
        });
    });
}

// Button hover effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button, .filter-btn, .contact-method');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Card hover effects
function initCardEffects() {
    const cards = document.querySelectorAll('.team-card, .project-card, .competition-card, .expertise-card, .highlight-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease-out';
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Scroll animation for hero scroll indicator
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.hero-scroll');
    
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }
}

// Reduce motion support
function initReduceMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.documentElement.style.scrollBehavior = 'auto';
        const style = document.createElement('style');
        style.innerHTML = `
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Easter egg - AOA activation
function initEasterEgg() {
    let keySequence = [];
    const targetSequence = ['a', 'o', 'a'];

    document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        keySequence.push(key);

        if (keySequence.length > 3) {
            keySequence.shift();
        }

        if (keySequence.join('') === targetSequence.join('')) {
            activateAnonymousMode();
            keySequence = [];
        }
    });

    // Also trigger on logo click
    const logo = document.querySelector('.navbar-logo');
    if (logo) {
        let clickCount = 0;
        logo.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 3) {
                activateAnonymousMode();
                clickCount = 0;
            }
            setTimeout(() => clickCount = 0, 1000);
        });
    }
}

function activateAnonymousMode() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
        color: #000;
        padding: 30px 60px;
        border-radius: 50px;
        font-size: 24px;
        font-weight: bold;
        font-family: 'Space Grotesk', sans-serif;
        z-index: 10000;
        animation: slideUp 0.5s ease-out;
    `;
    message.textContent = '✦ Anonymous Mode Activated ✦';
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => message.remove(), 500);
    }, 2000);
}

// Lazy load images
function initLazyLoad() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Preload critical resources
function initPreload() {
    // Preload fonts
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap';
    link.crossOrigin = 'anonymous';
}

// Initialize all animations
function initializeAnimations() {
    initScrollReveal();
    initSmoothScroll();
    initNavbarScroll();
    initMobileMenu();
    initModal();
    initParallax();
    initCursorEffect();
    initButtonEffects();
    initCardEffects();
    initScrollIndicator();
    initReduceMotion();
    initEasterEgg();
    initLazyLoad();
    initPreload();
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeAnimations,
        initScrollReveal,
        initSmoothScroll,
        initNavbarScroll,
        initMobileMenu,
        initModal
    };
}
