/* ============================================
   COMPONENTS
   ============================================ */

// Render Team Cards
function renderTeam() {
    const container = document.getElementById('teamContainer');
    if (!container) return;

    container.innerHTML = TEAM.map(member => `
        <div class="team-card scroll-reveal">
            <div class="team-card-image">${member.initials}</div>
            <div class="team-card-content">
                <div class="team-name">${member.name}</div>
                <div class="team-role">${member.role}</div>
                <p class="team-bio">${member.bio}</p>
                <div class="team-socials">
                    ${member.socials.github ? `<a href="${member.socials.github}" class="team-social-link" title="GitHub">🐙</a>` : ''}
                    ${member.socials.linkedin ? `<a href="${member.socials.linkedin}" class="team-social-link" title="LinkedIn">💼</a>` : ''}
                    ${member.socials.instagram ? `<a href="${member.socials.instagram}" class="team-social-link" title="Instagram">📷</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Render Expertise Cards
function renderExpertise() {
    const container = document.getElementById('expertiseContainer');
    if (!container) return;

    container.innerHTML = EXPERTISE.map(exp => `
        <div class="expertise-card scroll-reveal">
            <h3 class="expertise-title">${exp.category}</h3>
            <div class="expertise-items">
                ${exp.skills.map(skill => `
                    <div class="expertise-item">✦ ${skill}</div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Render Project Filter Buttons
function renderProjectFilters() {
    const container = document.getElementById('filterContainer');
    if (!container) return;

    const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];

    container.innerHTML = `
        ${categories.map(cat => `
            <button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-filter="${cat === 'All' ? '' : cat}">
                ${cat}
            </button>
        `).join('')}
    `;

    // Add filter functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects(btn.dataset.filter);
        });
    });
}

// Filter Projects
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (category === '' || cardCategory === category) {
            card.style.display = 'block';
            setTimeout(() => card.classList.add('scroll-reveal'), 10);
        } else {
            card.style.display = 'none';
            card.classList.remove('scroll-reveal');
        }
    });
}

// Render Projects
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = PROJECTS.map(project => `
        <div class="project-card scroll-reveal" data-category="${project.category}" data-id="${project.id}">
            <div class="project-image">💻</div>
            <div class="project-content">
                <div class="project-category">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.shortDesc}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Add project click handlers
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            showProjectModal(id);
        });
    });
}

// Show Project Modal
function showProjectModal(projectId) {
    const project = PROJECTS.find(p => p.id === parseInt(projectId));
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <div class="modal-meta">
            <span><strong>Category:</strong> ${project.category}</span>
            <span><strong>Year:</strong> ${project.year}</span>
        </div>
        <p>${project.description}</p>
        ${project.technologies && project.technologies.length > 0 ? `
            <div class="modal-tech">
                <h4>Technologies</h4>
                <div class="modal-tech-list">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        ` : ''}
        ${project.role ? `<p><strong>Role:</strong> ${project.role}</p>` : ''}
        ${project.link ? `<p><a href="${project.link}" target="_blank" class="cta-button primary" style="margin-top: 20px;">View Project →</a></p>` : ''}
    `;

    modal.classList.add('active');
}

// Render Timeline
function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;

    container.innerHTML = EXPERIENCES.map((exp, index) => `
        <div class="timeline-item scroll-reveal" style="animation-delay: ${index * 0.1}s">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-year">${exp.year}</div>
                <div class="timeline-title">${exp.title}</div>
                <div class="timeline-organization">${exp.organization}</div>
                <p class="timeline-description">${exp.description}</p>
            </div>
        </div>
    `).join('');
}

// Render Competitions
function renderCompetitions() {
    const container = document.getElementById('competitionsContainer');
    if (!container) return;

    container.innerHTML = COMPETITIONS.map(comp => `
        <div class="competition-card scroll-reveal">
            <div class="competition-image">🏆</div>
            <div class="competition-content">
                <h3 class="competition-title">${comp.title}</h3>
                <div class="competition-meta">
                    <span class="competition-year">${comp.year}</span>
                    <span class="competition-category">${comp.category}</span>
                </div>
                <div class="competition-result">${comp.result}</div>
                <p class="competition-description">${comp.achievement}</p>
            </div>
        </div>
    `).join('');
}

// Render Contact Methods
function renderContact() {
    const container = document.getElementById('contactContainer');
    const footerSocial = document.getElementById('footerSocialContainer');

    if (container) {
        container.innerHTML = CONTACT_METHODS.map(method => `
            <a href="${method.link}" target="_blank" class="contact-method">
                <div class="contact-icon">${method.icon}</div>
                <div class="contact-label">${method.label}</div>
            </a>
        `).join('');
    }

    if (footerSocial) {
        footerSocial.innerHTML = CONTACT_METHODS.map(method => `
            <a href="${method.link}" target="_blank" title="${method.label}">${method.icon}</a>
        `).join('');
    }
}

// Count up animation for statistics
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Render Statistics
function renderStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(stat, target);
                    observer.unobserve(stat);
                }
            });
        }, observerOptions);

        observer.observe(stat);
    });
}

// Initialize all components
function initializeComponents() {
    renderTeam();
    renderExpertise();
    renderProjects();
    renderProjectFilters();
    renderTimeline();
    renderCompetitions();
    renderContact();
    renderStatistics();
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        renderTeam,
        renderExpertise,
        renderProjects,
        renderTimeline,
        renderCompetitions,
        renderContact,
        initializeComponents,
        showProjectModal
    };
}
