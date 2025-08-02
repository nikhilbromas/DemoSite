// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Active navigation highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-prolio-accent');
        link.classList.add('text-prolio-dark');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.remove('text-prolio-dark');
            link.classList.add('text-prolio-accent');
        }
    });
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-fade');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Navbar background on scroll
function updateNavbar() {
    const navbar = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
}

// Portfolio hover effects
function initPortfolioEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Contact form handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Basic form validation
        if (!data.firstName || !data.lastName || !data.email || !data.message || !data.project) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(full)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll event listeners
window.addEventListener('scroll', () => {
    updateActiveNav();
    animateOnScroll();
    updateNavbar();
});

// Loading animations
function initLoadingAnimations() {
    // Animate hero section on load
    setTimeout(() => {
        const heroSection = document.querySelector('#home .section-fade');
        if (heroSection) {
            heroSection.classList.add('visible');
        }
    }, 300);
}

// Parallax effect for hero section
function initParallaxEffect() {
    const hero = document.getElementById('home');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.text-3xl.font-bold.text-prolio-accent');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    updateCounter();
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Testimonials carousel (auto-rotate)
function initTestimonialsCarousel() {
    const testimonials = document.querySelectorAll('#testimonials .bg-prolio-gray');
    let currentIndex = 0;
    
    function rotateTestimonials() {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.opacity = index === currentIndex ? '1' : '0.7';
            testimonial.style.transform = index === currentIndex ? 'scale(1)' : 'scale(0.95)';
        });
        
        currentIndex = (currentIndex + 1) % testimonials.length;
    }
    
    // Auto-rotate every 5 seconds
    setInterval(rotateTestimonials, 5000);
}

// Portfolio filter (if we want to add categories later)
function initPortfolioFilter() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Add category data attributes if needed
    portfolioItems.forEach((item, index) => {
        const categories = ['commercial', 'residential', 'cultural', 'retail', 'hospitality', 'educational'];
        item.setAttribute('data-category', categories[index % categories.length]);
    });
}

// Intersection Observer for better performance
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section-fade').forEach(el => {
        observer.observe(el);
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLoadingAnimations();
    initPortfolioEffects();
    initContactForm();
    initParallaxEffect();
    animateCounters();
    initTestimonialsCarousel();
    initPortfolioFilter();
    initIntersectionObserver();
    initGeometricAnimations();
    initInteractiveShapes();
    initCursorEffects();
    
    // Initial calls
    updateActiveNav();
    animateOnScroll();
    updateNavbar();
});

// Enhanced geometric animations
function initGeometricAnimations() {
    const isMobile = window.innerWidth <= 768;
    
    // Add dynamic animation delays to floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const randomDelay = Math.random() * 3;
        const randomDuration = isMobile ? 8 + Math.random() * 4 : 6 + Math.random() * 4;
        shape.style.animationDelay = `${randomDelay}s`;
        shape.style.animationDuration = `${randomDuration}s`;
        
        // Enhanced mobile visibility
        if (isMobile) {
            shape.style.opacity = '0.4';
            shape.style.filter = 'drop-shadow(0 2px 6px rgba(37, 99, 235, 0.4))';
        }
        
        // Add interaction events (both mouse and touch)
        const addInteraction = () => {
            shape.style.transform = `translateY(-10px) rotate(${Math.random() * 360}deg)`;
            shape.style.opacity = isMobile ? '0.6' : '0.8';
        };
        
        const removeInteraction = () => {
            shape.style.transform = '';
            shape.style.opacity = isMobile ? '0.4' : '0.4';
        };
        
        // Mouse events for desktop
        shape.addEventListener('mouseenter', addInteraction);
        shape.addEventListener('mouseleave', removeInteraction);
        
        // Touch events for mobile
        shape.addEventListener('touchstart', addInteraction);
        shape.addEventListener('touchend', removeInteraction);
    });
    
    // Enhanced parallax shapes
    const parallaxShapes = document.querySelectorAll('.parallax-shape');
    parallaxShapes.forEach((shape, index) => {
        const randomDelay = Math.random() * 2;
        const randomDuration = isMobile ? 10 + Math.random() * 4 : 8 + Math.random() * 4;
        shape.style.animationDelay = `${randomDelay}s`;
        shape.style.animationDuration = `${randomDuration}s`;
        
        // Enhanced mobile visibility for parallax shapes
        if (isMobile) {
            shape.style.opacity = '0.25';
        }
    });
    
    // Featured shapes mobile enhancement
    const featuredShapes = document.querySelectorAll('.featured-shape');
    featuredShapes.forEach(shape => {
        if (isMobile) {
            shape.style.opacity = '0.5';
            shape.style.filter = 'drop-shadow(0 4px 12px rgba(37, 99, 235, 0.5))';
        }
    });
}

// Interactive shape effects
function initInteractiveShapes() {
    // Create dynamic shapes on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        
        // Create temporary shapes on fast scroll
        if (Math.abs(scrollTop - lastScrollTop) > 50) {
            createTemporaryShape(scrollDirection);
        }
        
        lastScrollTop = scrollTop;
    });
}

// Create temporary animated shapes
function createTemporaryShape(direction) {
    const shapes = ['triangle', 'star', 'circle', 'diamond'];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    
    const tempShape = document.createElement('div');
    tempShape.className = `shape ${randomShape}`;
    tempShape.style.position = 'fixed';
    tempShape.style.left = Math.random() * window.innerWidth + 'px';
    tempShape.style.top = direction === 'down' ? '-30px' : window.innerHeight + 'px';
    tempShape.style.opacity = '0.2';
    tempShape.style.pointerEvents = 'none';
    tempShape.style.zIndex = '5';
    tempShape.style.animation = `temp-float 2s ease-out forwards`;
    
    document.body.appendChild(tempShape);
    
    // Remove after animation
    setTimeout(() => {
        if (tempShape.parentNode) {
            tempShape.parentNode.removeChild(tempShape);
        }
    }, 2000);
}

// Enhanced cursor effects
function initCursorEffects() {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Create custom cursor trail
    function createCursorTrail() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        // Update any cursor-following elements
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const x = mouseX - rect.left;
            const y = mouseY - rect.top;
            
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                const overlay = item.querySelector('.geometric-overlay');
                if (overlay) {
                    overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(37, 99, 235, 0.3), rgba(37, 99, 235, 0.1))`;
                }
            }
        });
        
        requestAnimationFrame(createCursorTrail);
    }
    createCursorTrail();
}

// Enhanced portfolio effects with geometric overlays
function initEnhancedPortfolioEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const isMobile = window.innerWidth <= 768;
    
    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.geometric-overlay');
        
        const activateOverlay = function() {
            this.style.transform = isMobile ? 'translateY(-8px) scale(1.01)' : 'translateY(-15px) scale(1.02)';
            
            // Animate overlay with geometric pattern
            if (overlay) {
                overlay.style.opacity = isMobile ? '0.9' : '1';
                overlay.style.transform = 'scale(1)';
                
                // Create pulsing geometric shapes in overlay
                createOverlayShapes(overlay);
            }
        };
        
        const deactivateOverlay = function() {
            this.style.transform = '';
            
            if (overlay) {
                overlay.style.opacity = '0';
                overlay.style.transform = 'scale(0.8)';
                
                // Clear overlay shapes
                clearOverlayShapes(overlay);
            }
        };
        
        // Mouse events for desktop
        item.addEventListener('mouseenter', activateOverlay);
        item.addEventListener('mouseleave', deactivateOverlay);
        
        // Touch events for mobile
        if (isMobile) {
            let touchTimeout;
            
            item.addEventListener('touchstart', function(e) {
                clearTimeout(touchTimeout);
                activateOverlay.call(this);
            });
            
            item.addEventListener('touchend', function(e) {
                touchTimeout = setTimeout(() => {
                    deactivateOverlay.call(this);
                }, 2000); // Keep overlay visible for 2 seconds on mobile
            });
            
            // Handle touch cancel
            item.addEventListener('touchcancel', function(e) {
                clearTimeout(touchTimeout);
                deactivateOverlay.call(this);
            });
        }
    });
}

// Create animated shapes in portfolio overlays
function createOverlayShapes(overlay) {
    // Clear existing shapes
    clearOverlayShapes(overlay);
    
    const shapes = ['triangle', 'star', 'circle'];
    for (let i = 0; i < 3; i++) {
        const shape = document.createElement('div');
        shape.className = `overlay-shape ${shapes[i % shapes.length]}`;
        shape.style.position = 'absolute';
        shape.style.left = Math.random() * 80 + 10 + '%';
        shape.style.top = Math.random() * 80 + 10 + '%';
        shape.style.opacity = '0.3';
        shape.style.animation = `overlay-float 2s infinite ease-in-out`;
        shape.style.animationDelay = `${i * 0.3}s`;
        
        overlay.appendChild(shape);
    }
}

// Clear overlay shapes
function clearOverlayShapes(overlay) {
    const existingShapes = overlay.querySelectorAll('.overlay-shape');
    existingShapes.forEach(shape => shape.remove());
}

// Enhanced service card animations
function initEnhancedServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add rotating border effect
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(37, 99, 235, 0.15)';
            
            // Create floating mini shapes around the card
            createCardShapes(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            // Remove floating shapes
            clearCardShapes(this);
        });
    });
}

// Create floating shapes around service cards
function createCardShapes(card) {
    const positions = [
        {top: '-10px', left: '-10px'},
        {top: '-10px', right: '-10px'},
        {bottom: '-10px', left: '-10px'},
        {bottom: '-10px', right: '-10px'}
    ];
    
    positions.forEach((pos, index) => {
        const shape = document.createElement('div');
        shape.className = 'card-floating-shape';
        shape.style.position = 'absolute';
        shape.style.width = '8px';
        shape.style.height = '8px';
        shape.style.background = '#2563eb';
        shape.style.borderRadius = '50%';
        shape.style.opacity = '0.4';
        shape.style.animation = 'float 2s infinite ease-in-out';
        shape.style.animationDelay = `${index * 0.2}s`;
        shape.style.zIndex = '10';
        
        Object.assign(shape.style, pos);
        card.appendChild(shape);
    });
}

// Clear card floating shapes
function clearCardShapes(card) {
    const shapes = card.querySelectorAll('.card-floating-shape');
    shapes.forEach(shape => shape.remove());
}

// Advanced scroll-triggered animations
function initAdvancedScrollAnimations() {
    const observerOptions = {
        threshold: [0.1, 0.3, 0.5, 0.7],
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const ratio = entry.intersectionRatio;
            
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add progressive animation based on visibility ratio
                entry.target.style.transform = `translateY(${(1 - ratio) * 30}px)`;
                entry.target.style.opacity = ratio;
                
                // Trigger shape animations when fully visible
                if (ratio > 0.7) {
                    triggerSectionShapes(entry.target);
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section-fade').forEach(el => {
        observer.observe(el);
    });
}

// Trigger animated shapes for specific sections
function triggerSectionShapes(section) {
    const shapes = section.parentElement.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        setTimeout(() => {
            shape.style.opacity = '0.15';
            shape.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                shape.style.opacity = '0.1';
                shape.style.transform = '';
            }, 500);
        }, index * 200);
    });
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    // Add the enhanced functionality
    initEnhancedPortfolioEffects();
    initEnhancedServiceCards();
    initAdvancedScrollAnimations();
});

// Add CSS for temporary shapes
const tempShapeStyles = document.createElement('style');
tempShapeStyles.textContent = `
    @keyframes temp-float {
        0% { opacity: 0.2; transform: translateY(0px) scale(0.5); }
        50% { opacity: 0.4; transform: translateY(-100px) scale(1); }
        100% { opacity: 0; transform: translateY(-200px) scale(0.5); }
    }
    
    @keyframes overlay-float {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-10px) scale(1.1); }
    }
    
    .overlay-shape.triangle {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 12px solid rgba(255, 255, 255, 0.6);
    }
    
    .overlay-shape.star {
        width: 12px;
        height: 12px;
        background: rgba(255, 255, 255, 0.6);
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }
    
    .overlay-shape.circle {
        width: 10px;
        height: 10px;
        border: 2px solid rgba(255, 255, 255, 0.6);
        border-radius: 50%;
    }
`;
document.head.appendChild(tempShapeStyles);

// Debug: Count and display geometric elements
function updateShapeCount() {
    const shapes = document.querySelectorAll('.shape, .parallax-shape, .featured-shape');
    const countElement = document.getElementById('shapes-count');
    const isMobile = window.innerWidth <= 768;
    
    if (countElement) {
        countElement.textContent = shapes.length;
    }
    
    // Add visual confirmation that shapes are loaded
    shapes.forEach((shape, index) => {
        shape.title = `Geometric element ${index + 1}: ${shape.className}`;
        
        // Add a subtle border for debugging (remove in production)
        if (window.location.search.includes('debug')) {
            shape.style.border = '1px solid rgba(255, 0, 0, 0.3)';
        }
        
        // Ensure mobile visibility
        if (isMobile && !shape.style.opacity) {
            if (shape.classList.contains('featured-shape')) {
                shape.style.opacity = '0.5';
            } else if (shape.classList.contains('parallax-shape')) {
                shape.style.opacity = '0.25';
            } else {
                shape.style.opacity = '0.4';
            }
        }
    });
    
    // Add mobile-specific style adjustments
    if (isMobile) {
        const style = document.createElement('style');
        style.id = 'mobile-shape-fix';
        style.textContent = `
            .shape {
                filter: drop-shadow(0 2px 6px rgba(37, 99, 235, 0.4)) !important;
            }
            .featured-shape {
                filter: drop-shadow(0 4px 12px rgba(37, 99, 235, 0.5)) !important;
            }
        `;
        
        // Only add if not already added
        if (!document.getElementById('mobile-shape-fix')) {
            document.head.appendChild(style);
        }
    }
}

// Mobile-specific geometric enhancements
function initMobileGeometricEnhancements() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Enhance touch interactions for all shapes
        const allShapes = document.querySelectorAll('.shape, .parallax-shape, .featured-shape');
        allShapes.forEach(shape => {
            shape.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.style.opacity = '0.7';
                this.style.transform = 'scale(1.1)';
            });
            
            shape.addEventListener('touchend', function(e) {
                setTimeout(() => {
                    this.style.opacity = '';
                    this.style.transform = '';
                }, 300);
            });
        });
        
        // Add mobile-specific visibility enhancements
        setTimeout(() => {
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach(shape => {
                const currentOpacity = parseFloat(getComputedStyle(shape).opacity);
                if (currentOpacity < 0.3) {
                    shape.style.opacity = '0.35';
                }
            });
        }, 500);
    }
}

// Initialize shape counting and mobile enhancements
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        updateShapeCount();
        initMobileGeometricEnhancements();
    }, 1000); // Delay to ensure all elements are rendered
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
    }
    
    // Recalculate mobile enhancements on resize
    setTimeout(() => {
        updateShapeCount();
        initMobileGeometricEnhancements();
    }, 300);
});

// Preloader (optional)
window.addEventListener('load', () => {
    // Remove any loading states
    document.body.classList.add('loaded');
});

// Service worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}