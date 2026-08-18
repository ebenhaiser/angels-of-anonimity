/* ============================================
   MAIN APPLICATION
   ============================================ */

// Wait for DOM to be ready
function initApp() {
    // Hide loader after animations
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 1500);

    // Initialize components (render content from data)
    initializeComponents();

    // Initialize animations and interactions
    initializeAnimations();

    // Log initialization
    console.log('✦ Angels of Anonymity Website Initialized ✦');
    console.log('Version: 1.0.0');
    console.log('Team Members: ' + TEAM.length);
    console.log('Projects: ' + PROJECTS.length);
    console.log('Competitions: ' + COMPETITIONS.length);
}

// Run when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Performance monitoring
function logPerformance() {
    if (window.performance && window.performance.timing) {
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        const connectTime = timing.responseEnd - timing.requestStart;
        const renderTime = timing.domInteractive - timing.navigationStart;
        
        console.log(`Page Load Time: ${loadTime}ms`);
        console.log(`Connection Time: ${connectTime}ms`);
        console.log(`Render Time: ${renderTime}ms`);
    }
}

// Run performance check after page load
window.addEventListener('load', logPerformance);

// Service Worker registration (optional, for PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js').catch(err => {
        //     console.log('Service Worker registration failed:', err);
        // });
    });
}

// Global error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
