// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });

    // Close mobile menu when window is resized
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Testimonials Slider
const testimonials = [
    {
        text: "This toolkit has been a game-changer for our family. The guides are practical and easy to follow.",
        author: "Sarah M.",
        role: "Mother of two",
        image: "images/testimonials/parent1.jpg"
    },
    {
        text: "As a busy parent, I appreciate how the resources are organized and easy to access. Highly recommended!",
        author: "John D.",
        role: "Father of three",
        image: "images/testimonials/parent2.jpg"
    },
    {
        text: "The digital safety checklists have helped us create a safer online environment for our children.",
        author: "Maria L.",
        role: "Mother of one",
        image: "images/testimonials/parent3.jpg"
    }
];

let currentTestimonial = 0;
const testimonialSlider = document.querySelector('.testimonials-slider');

function updateTestimonial() {
    if (testimonialSlider) {
        const testimonial = testimonials[currentTestimonial];
        testimonialSlider.innerHTML = `
            <div class="testimonial fade-in">
                <p>"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.author}">
                    <div>
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Auto-rotate testimonials
if (testimonialSlider) {
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    }, 5000);
}

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add scroll-to-top button styles
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary-color);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: var(--shadow);
        transition: opacity 0.3s, transform 0.3s;
        z-index: 1000;
    }

    .scroll-to-top.show {
        display: flex;
    }

    .scroll-to-top:hover {
        transform: translateY(-2px);
        background-color: var(--secondary-color);
    }
`;
document.head.appendChild(style);

// Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }

        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });

    return isValid;
}

// Add error styles
const formStyles = document.createElement('style');
formStyles.textContent = `
    .error {
        border-color: #ff4444 !important;
    }

    .error-message {
        color: #ff4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
`;
document.head.appendChild(formStyles); 

// Testimonial Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('testimonial-carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.testimonial-slide');
    const dots = carousel.querySelectorAll('.testimonial-dot');
    const prevBtn = carousel.querySelector('.testimonial-arrow.left');
    const nextBtn = carousel.querySelector('.testimonial-arrow.right');
    
    let currentSlide = 0;
    let slideInterval;

    // Initialize carousel
    function initCarousel() {
        if (slides.length === 0) return;
        
        // Show first slide
        slides[0].classList.add('active');
        if (dots.length > 0) dots[0].classList.add('active');
        
        // Start auto-play
        startAutoPlay();
    }

    // Show specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => {
            slide.classList.remove('active', 'prev');
        });
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');

        // Add prev class to previous slide for animation
        const prevIndex = index === 0 ? slides.length - 1 : index - 1;
        slides[prevIndex].classList.add('prev');
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Previous slide
    function prevSlide() {
        currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    }

    // Start auto-play
    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Stop auto-play
    function stopAutoPlay() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }

    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        });
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            stopAutoPlay();
            currentSlide = index;
            showSlide(currentSlide);
            startAutoPlay();
        });
    });

    // Pause auto-play on hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Initialize carousel
    initCarousel();
});

// Add fade-in animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.feature-card, .toolkit-card, .testimonial-carousel');
    animatedElements.forEach(el => observer.observe(el));
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 