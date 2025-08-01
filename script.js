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
    
    // Initial calls
    updateActiveNav();
    animateOnScroll();
    updateNavbar();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
    }
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