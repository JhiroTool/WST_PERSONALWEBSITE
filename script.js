// SweetAlert integration for the Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Display SweetAlert success message
    Swal.fire({
        title: 'Message Sent!',
        text: 'Thank you for reaching out. I will get back to you soon.',
        icon: 'success',
        confirmButtonText: 'OK'
    });

    // Optionally, reset the form fields
    contactForm.reset();
});



// Consolidated Scroll Event Listener
function handleScrollEffects() {
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    const progressBars = document.querySelectorAll('.progress-bar');

    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });

    progressBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        if (bar.getBoundingClientRect().top < window.innerHeight) {
            bar.style.width = `${value}%`;
        }
    });
}

window.addEventListener('scroll', handleScrollEffects);

// Trigger animation on page load for visible progress bars
document.addEventListener('DOMContentLoaded', () => {
    handleScrollEffects();
});

// Debounce Function
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Typing Animation for Landing Page
const roles = [
    "Computer Science Student",
    "Full-Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Future Innovator"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeRole() {
    const typedTextElement = document.getElementById('typed-text');
    if (!typedTextElement) return;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
            return;
        }
        setTimeout(typeRole, deletingSpeed);
    } else {
        typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, pauseTime);
            return;
        }
        setTimeout(typeRole, typingSpeed);
    }
}

// Counter Animation for Social Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50;
        let current = 0;
        
        counter.textContent = '0'; // Start from 0
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Particle System
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 3000);
    }
    
    // Create particles continuously
    setInterval(createParticle, 300);
}

// Code Rain Effect
function createCodeRain() {
    const codeRainContainer = document.querySelector('.code-rain');
    if (!codeRainContainer) return;
    
    const codeChars = ['0', '1', '{', '}', '(', ')', '<', '>', '/', '\\', 'def', 'var', 'let', 'const', 'if', 'else'];
    
    function createCodeChar() {
        const char = document.createElement('div');
        char.className = 'code-char';
        char.textContent = codeChars[Math.floor(Math.random() * codeChars.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDelay = Math.random() * 4 + 's';
        codeRainContainer.appendChild(char);
        
        // Remove character after animation
        setTimeout(() => {
            if (char.parentNode) {
                char.parentNode.removeChild(char);
            }
        }, 4000);
    }
    
    // Create code characters continuously
    setInterval(createCodeChar, 200);
}

// Smooth Scroll for CTA Buttons
function setupSmoothScroll() {
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const href = btn.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Active Navigation Highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Loading animation
function showLoadingComplete() {
    const body = document.body;
    body.classList.add('loaded');
    
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading Portfolio...</p>
        </div>
    `;
    
    document.body.appendChild(loadingOverlay);
    
    // Hide loading after 2 seconds
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.remove();
        }, 500);
    }, 2000);
}

// Back to Top Button
function handleBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

// Enhanced scroll listener
window.addEventListener('scroll', () => {
    handleScrollEffects();
    updateActiveNavLink();
    handleHeaderScroll();
    handleBackToTop();
});

// Enhanced DOMContentLoaded event - Single consolidated event listener
document.addEventListener('DOMContentLoaded', () => {
    // Show loading animation
    showLoadingComplete();
    
    // Back to Top Button Click Handler
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Original functionality
    handleScrollEffects();
    
    // New landing page functionality
    // Start typing animation
    setTimeout(typeRole, 1000);
    
    // Animate counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains('social-preview')) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });
    
    const socialPreview = document.querySelector('.social-preview');
    if (socialPreview) {
        observer.observe(socialPreview);
    } else {
        // If section not found, animate immediately
        setTimeout(() => {
            animateCounters();
        }, 2000);
    }
    
    // Start particle effects
    createParticles();
    createCodeRain();
    
    // Setup smooth scrolling
    setupSmoothScroll();
    
    // Initialize active nav
    updateActiveNavLink();
});
