// TenantShare Landing Page JavaScript

// Analytics stub (disabled by default)
const analyticsEnabled = false;

function track(eventName, payload = {}) {
    if (!analyticsEnabled) return;
    console.log('analytics', eventName, payload);
}

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initAnnouncementBar();
    initStickyHeader();
    initSmoothScroll();
    initHeroAnimation();
    initMobileStickyCTA();
    initCTAButtons();
    initTooltips();
});

// Announcement Bar
function initAnnouncementBar() {
    const announcementBar = document.getElementById('announcement-bar');
    const dismissBtn = document.getElementById('dismiss-announcement');
    
    if (!announcementBar || !dismissBtn) return;
    
    // Check if previously dismissed
    if (localStorage.getItem('announcement-dismissed') === 'true') {
        announcementBar.classList.add('hidden');
    }
    
    dismissBtn.addEventListener('click', function() {
        announcementBar.classList.add('hidden');
        localStorage.setItem('announcement-dismissed', 'true');
        track('dismiss_announcement');
    });
}

// Sticky Header Shadow on Scroll
function initStickyHeader() {
    const header = document.querySelector('.site-header');
    
    if (!header) return;
    
    function updateHeader() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader();
}

// Smooth Scroll for Nav Anchors
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or special anchors
            if (href === '#' || href === '#launch' || href === '#import' || href === '#walkthrough') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                track('nav_click', { section: href });
            }
        });
    });
}

// Hero Micro-Flow Animation
function initHeroAnimation() {
    const frames = document.querySelectorAll('.flow-frame');
    
    if (frames.length === 0) return;
    
    let currentFrame = 0;
    
    function nextFrame() {
        frames[currentFrame].classList.remove('active');
        currentFrame = (currentFrame + 1) % frames.length;
        frames[currentFrame].classList.add('active');
    }
    
    // Rotate frames every 2.5 seconds
    setInterval(nextFrame, 2500);
}

// Mobile Sticky CTA
function initMobileStickyCTA() {
    const stickyCTA = document.getElementById('mobile-sticky-cta');
    
    if (!stickyCTA) return;
    
    let lastScroll = 0;
    let scrollThreshold = 300;
    
    function updateStickyCTA() {
        const currentScroll = window.pageYOffset;
        
        if (window.innerWidth <= 768) {
            if (currentScroll > scrollThreshold && currentScroll > lastScroll) {
                // Scrolling down past threshold
                stickyCTA.classList.add('visible');
            } else if (currentScroll < lastScroll) {
                // Scrolling up
                stickyCTA.classList.remove('visible');
            }
        } else {
            stickyCTA.classList.remove('visible');
        }
        
        lastScroll = currentScroll;
    }
    
    window.addEventListener('scroll', updateStickyCTA);
    window.addEventListener('resize', updateStickyCTA);
    updateStickyCTA();
}

// CTA Button Actions
function initCTAButtons() {
    // Launch TenantShare buttons
    document.querySelectorAll('[data-action="launch"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            track('click_launch', { 
                location: this.closest('section')?.id || 'header'
            });
            
            // Simulate time-to-first-statement metric
            const startTime = Date.now();
            
            // In a real app, this would navigate to the app
            alert('TenantShare app would launch here. This is a static landing page demo.');
            
            const timeToFirstStatement = Date.now() - startTime;
            track('time_to_first_statement', { duration_ms: timeToFirstStatement });
        });
    });
    
    // Import from Utility Binder buttons
    document.querySelectorAll('[data-action="import"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            track('click_import', {
                location: this.closest('section')?.id || 'header'
            });
            
            // In a real app, this would trigger Utility Binder import
            alert('Utility Binder import would start here. This is a static landing page demo.');
        });
    });
    
    // Download PDF links
    document.querySelectorAll('a[href*="sample.pdf"]').forEach(link => {
        link.addEventListener('click', function() {
            track('download_pdf', {
                location: this.closest('section')?.id || 'unknown'
            });
        });
    });
    
    // Validate shares (simulated)
    const validateButtons = document.querySelectorAll('[data-action="validate"]');
    validateButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            track('click_validate_shares');
        });
    });
    
    // Generate statements (simulated)
    const generateButtons = document.querySelectorAll('[data-action="generate"]');
    generateButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            track('click_generate_statements');
        });
    });
    
    // Export all PDFs (simulated)
    const exportAllButtons = document.querySelectorAll('[data-action="export-all"]');
    exportAllButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            track('export_all_pdfs');
        });
    });
    
    // Export CSV (simulated)
    const exportCSVButtons = document.querySelectorAll('[data-action="export-csv"]');
    exportCSVButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            track('export_csv');
        });
    });
}

// Tooltips and Inline Math Revealer
function initTooltips() {
    // Add hover effects for tooltips
    document.querySelectorAll('.step-tooltip').forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--bg-accent)';
        });
        
        tooltip.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--bg-light)';
        });
    });
    
    // Track when users expand "Show math" details
    document.querySelectorAll('.show-math').forEach(details => {
        details.addEventListener('toggle', function() {
            if (this.open) {
                track('show_math_details');
            }
        });
    });
    
    // Track FAQ interactions
    document.querySelectorAll('.faq-item').forEach(faq => {
        faq.addEventListener('toggle', function() {
            if (this.open) {
                const question = this.querySelector('summary')?.textContent;
                track('faq_expand', { question: question?.substring(0, 50) });
            }
        });
    });
}

// Template hover effects
document.addEventListener('DOMContentLoaded', function() {
    const templatePreviews = document.querySelectorAll('.template-preview');
    
    templatePreviews.forEach(preview => {
        preview.addEventListener('mouseenter', function() {
            track('template_hover', {
                template: this.querySelector('h3')?.textContent
            });
        });
    });
});

// External link tracking
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            track('external_link_click', {
                url: this.href,
                text: this.textContent?.substring(0, 50)
            });
        });
    });
});

// Page load analytics
window.addEventListener('load', function() {
    track('page_load', {
        loadTime: performance.now(),
        userAgent: navigator.userAgent.substring(0, 100)
    });
});

// Visibility tracking (for engagement metrics)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        track('page_hidden');
    } else {
        track('page_visible');
    }
});

// Scroll depth tracking (simple implementation)
let maxScrollDepth = 0;
window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;
    
    if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = Math.floor(scrollPercentage);
        
        // Track at 25%, 50%, 75%, 100% milestones
        if (maxScrollDepth >= 25 && maxScrollDepth < 30) {
            track('scroll_depth', { depth: 25 });
        } else if (maxScrollDepth >= 50 && maxScrollDepth < 55) {
            track('scroll_depth', { depth: 50 });
        } else if (maxScrollDepth >= 75 && maxScrollDepth < 80) {
            track('scroll_depth', { depth: 75 });
        } else if (maxScrollDepth >= 100) {
            track('scroll_depth', { depth: 100 });
        }
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC to close announcement
    if (e.key === 'Escape') {
        const announcement = document.getElementById('announcement-bar');
        if (announcement && !announcement.classList.contains('hidden')) {
            announcement.classList.add('hidden');
            localStorage.setItem('announcement-dismissed', 'true');
        }
    }
});

// Accessibility: Announce page loads for screen readers
window.addEventListener('load', function() {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = 'TenantShare landing page loaded';
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => announcement.remove(), 1000);
});
