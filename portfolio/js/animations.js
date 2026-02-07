// Animations JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
    initializeEntranceAnimations();
    initializeHoverEffects();
    initializeProgressAnimations();
});

// Scroll Animations using Intersection Observer
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections and elements that need animation
    const animateElements = document.querySelectorAll(
        '.section-title, .about-text, .education, .skills-category, ' +
        '.project-card, .timeline-item, .contact-item, .contact-form'
    );
    
    animateElements.forEach(el => observer.observe(el));
}

// Entrance Animations
function initializeEntranceAnimations() {
    // Animate elements when they come into view
    const elementsToAnimate = [
        { selector: '.home-text', animation: 'fadeInUp', delay: 0 },
        { selector: '.home-image', animation: 'fadeInUp', delay: 300 },
        { selector: '.about-text', animation: 'fadeInUp', delay: 0 },
        { selector: '.education', animation: 'fadeInUp', delay: 300 },
        { selector: '.skills-grid', animation: 'fadeInUp', delay: 0 },
        { selector: '.soft-skills', animation: 'fadeInUp', delay: 300 }
    ];
    
    elementsToAnimate.forEach(item => {
        const elements = document.querySelectorAll(item.selector);
        elements.forEach((el, index) => {
            el.style.animationDelay = `${item.delay + (index * 100)}ms`;
        });
    });
}

// Hover Effects
function initializeHoverEffects() {
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Social link hover effects
    const socialLinks = document.querySelectorAll('.social-link, .project-link, .project-github');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Progress Bar Animations
function initializeProgressAnimations() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const percent = progressBar.getAttribute('data-percent');
                
                // Animate the progress bar
                setTimeout(() => {
                    progressBar.style.width = percent + '%';
                }, 300);
                
                progressObserver.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });
    
    progressBars.forEach(bar => progressObserver.observe(bar));
}

// Custom Cursor Animation (Optional)
function initializeCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease;
        mix-blend-mode: difference;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Scale cursor on hover
    const hoverElements = document.querySelectorAll('a, button, .project-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Parallax Effect for Background Elements
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = -(scrollY * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Text Animation Effects
function initializeTextAnimations() {
    // Split text into individual letters for animation
    const animatedTexts = document.querySelectorAll('.animate-text');
    
    animatedTexts.forEach(text => {
        const textContent = text.textContent;
        text.innerHTML = '';
        
        textContent.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            text.appendChild(span);
        });
    });
}

// Counter Animation for Numbers
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Initialize counter animations
function initializeCounterAnimations() {
    const counterElements = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                animateCounter(element, target);
                counterObserver.unobserve(element);
            }
        });
    });
    
    counterElements.forEach(el => counterObserver.observe(el));
}

// Floating Animation for Elements
function initializeFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.floating');
    
    floatingElements.forEach((el, index) => {
        const delay = index * 0.5;
        el.style.animation = `floating 3s ease-in-out ${delay}s infinite`;
    });
}

// Add CSS for floating animation
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes floating {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    .floating {
        animation: floating 3s ease-in-out infinite;
    }
`;
document.head.appendChild(floatingStyle);

// Scroll Progress Indicator
function initializeScrollProgress() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'scroll-progress-container';
    progressContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(0,0,0,0.1);
        z-index: 9999;
    `;
    
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    progressBar.style.cssText = `
        height: 100%;
        width: 0%;
        background: var(--primary-color);
        transition: width 0.1s ease;
    `;
    
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Back to Top Button
function initializeBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
            backToTopBtn.style.transform = 'translateY(0)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
            backToTopBtn.style.transform = 'translateY(20px)';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
        this.style.background = 'var(--primary-dark)';
    });
    
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.background = 'var(--primary-color)';
    });
}

// Particle Background Effect (Lightweight)
function initializeParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.className = 'particle-canvas';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.3;
    `;
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Mouse position tracking
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }
        
        draw() {
            ctx.fillStyle = 'var(--primary-color)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    function initParticles() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 9000);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // Animation loop
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    initParticles();
    animateParticles();
    
    // Reinitialize on resize
    window.addEventListener('resize', function() {
        setTimeout(initParticles, 100);
    });
}

// Initialize all advanced animations
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment the following lines to enable additional effects:
    // initializeCustomCursor();
    // initializeParallax();
    // initializeTextAnimations();
    // initializeCounterAnimations();
    // initializeFloatingAnimation();
    // initializeScrollProgress();
    // initializeBackToTop();
    // initializeParticleBackground();
});

// Export functions for potential external use
window.Animations = {
    initializeScrollAnimations,
    initializeHoverEffects,
    initializeProgressAnimations,
    animateCounter
};