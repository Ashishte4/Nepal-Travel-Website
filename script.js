
 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f0fdfa',
                            100: '#ccfbf1',
                            200: '#99f6e4',
                            300: '#5eead4',
                            400: '#2dd4bf',
                            500: '#14b8a6',
                            600: '#0d9488',
                            700: '#0f766e',
                            800: '#115e59',
                            900: '#134e4a',
                        },
                        accent: {
                            50: '#fffbeb',
                            100: '#fef3c7',
                            200: '#fde68a',
                            300: '#fcd34d',
                            400: '#fbbf24',
                            500: '#f59e0b',
                            600: '#d97706',
                            700: '#b45309',
                            800: '#92400e',
                            900: '#78350f',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'gradient': 'gradient 15s ease infinite',
                        'fade-in-up': 'fadeInUp 0.6s ease-out',
                    }
                }
            }
        }

         const toursData = [
            {
                id: "everest-base-camp",
                title: "Everest Base Camp Trek",
                duration: "14 Days",
                difficulty: "Challenging",
                price: "1,299",
                rating: 5,
                image: "img/Everest-Base-Camp-Trek.png",
                description: "The ultimate Himalayan adventure to the base of the world's highest peak.",
            },
            {
                id: "annapurna-circuit",
                title: "Annapurna Circuit Trek",
                duration: "12 Days",
                difficulty: "Moderate",
                price: "899",
                rating: 5,
                image: "img/Hiker-800.jpg",
                description: "Classic trek through diverse landscapes and traditional villages.",
            },
            {
                id: "langtang-valley",
                title: "Langtang Valley Trek",
                duration: "8 Days",
                difficulty: "Easy-Moderate",
                price: "599",
                rating: 4,
                image: "img/Langtang-stockphoto4-scaled-e1676457773525-1536x815.jpeg",
                description: "Beautiful valley trek close to Kathmandu with stunning mountain views.",
            },
        ];

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize AOS
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });

            // Initialize GSAP
            gsap.registerPlugin(ScrollTrigger);

            // Initialize all components
            initNavigation();
            initCursorFollower();
            initHeroSlider();
            initToursSlider();
            initTestimonialsSlider();
            initCounters();
            initNewsletterForm();
            initBackToTop();
            initScrollAnimations();
        });

        // Navigation functionality
        function initNavigation() {
            const navbar = document.getElementById('navbar');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('glass-effect');
                } else {
                    navbar.classList.remove('glass-effect');
                }
            });

            // Mobile menu toggle
            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('-translate-x-full');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                });

                // Close mobile menu when clicking on links
                mobileNavLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('-translate-x-full');
                        const icon = mobileMenuBtn.querySelector('i');
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    });
                });

                // Close mobile menu when clicking outside
                document.addEventListener('click', (e) => {
                    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                        mobileMenu.classList.add('-translate-x-full');
                        const icon = mobileMenuBtn.querySelector('i');
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                });
            }
        }

        // Cursor follower
        function initCursorFollower() {
            const cursor = document.getElementById('cursor-follower');
            if (!cursor) return;

            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursor.style.opacity = '1';
            });

            document.addEventListener('mouseleave', () => {
                cursor.style.opacity = '0';
            });

            function animateCursor() {
                cursorX += (mouseX - cursorX) * 0.1;
                cursorY += (mouseY - cursorY) * 0.1;
                
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
                
                requestAnimationFrame(animateCursor);
            }
            animateCursor();

            // Cursor hover effects
            const hoverElements = document.querySelectorAll('a, button, .cursor-hover');
            hoverElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'scale(2)';
                    cursor.style.backgroundColor = '#fbbf24';
                });
                
                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'scale(1)';
                    cursor.style.backgroundColor = '#14b8a6';
                });
            });
        }

        // Hero slider
        function initHeroSlider() {
            if (document.querySelector('.hero-bg-slider')) {
                new Swiper('.hero-bg-slider', {
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true,
                    },
                    speed: 2000,
                });
            }
        }

        // Tours slider
        function initToursSlider() {
            const toursContainer = document.getElementById('tours-container');
            if (!toursContainer) return;

            // Populate tours
            toursData.forEach(tour => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                
                const stars = Array(5).fill(0).map((_, i) => 
                    `<i class="fas fa-star ${i < tour.rating ? 'text-accent-400' : 'text-gray-400'}"></i>`
                ).join('');
                
                slide.innerHTML = `
                    <div class="glass-effect rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group" onclick="window.location.href='tour-detail.html?tour=${tour.id}'">
                        <div class="relative overflow-hidden">
                            <img src="${tour.image}" alt="${tour.title}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div class="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full font-semibold">
                                $${tour.price}
                            </div>
                            <div class="absolute bottom-4 left-4 flex items-center space-x-1">
                                ${stars}
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">${tour.title}</h3>
                            <p class="text-gray-400 mb-4">${tour.description}</p>
                            <div class="flex items-center justify-between text-sm text-gray-300">
                                <span class="flex items-center space-x-1">
                                    <i class="fas fa-clock text-primary-400"></i>
                                    <span>${tour.duration}</span>
                                </span>
                                <span class="flex items-center space-x-1">
                                    <i class="fas fa-signal text-primary-400"></i>
                                    <span>${tour.difficulty}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                toursContainer.appendChild(slide);
            });

            // Initialize swiper
            new Swiper('.tours-swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.tours-swiper .swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },
            });
        }

        // Testimonials slider
        function initTestimonialsSlider() {
            if (document.querySelector('.testimonials-swiper')) {
                new Swiper('.testimonials-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.testimonials-swiper .swiper-pagination',
                        clickable: true,
                    },
                });
            }
        }

        // Counter animation
        function initCounters() {
            const counters = document.querySelectorAll('.counter');

            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateCounter();
                            observer.unobserve(entry.target);
                        }
                    });
                });

                observer.observe(counter);
            });
        }

        // Newsletter form
        function initNewsletterForm() {
            const form = document.getElementById('newsletter-form');
            if (!form) return;

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                submitBtn.textContent = 'Subscribing...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    form.reset();
                    showNotification('Thank you for subscribing!', 'success');
                }, 2000);
            });
        }

        // Back to top button
        function initBackToTop() {
            const backToTopBtn = document.getElementById('back-to-top');
            if (!backToTopBtn) return;

            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.remove('opacity-0', 'invisible');
                    backToTopBtn.classList.add('opacity-100', 'visible');
                } else {
                    backToTopBtn.classList.add('opacity-0', 'invisible');
                    backToTopBtn.classList.remove('opacity-100', 'visible');
                }
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Scroll animations
        function initScrollAnimations() {
            // Floating elements animation
            gsap.to('.animate-float', {
                y: -20,
                duration: 2,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: -1
            });
        }

        // Notification function
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `fixed top-20 right-4 p-4 rounded-lg text-white z-50 transform translate-x-full transition-transform duration-300 ${
                type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`;
            notification.textContent = message;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);

            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }

              document.addEventListener('DOMContentLoaded', function() {
            // Initialize AOS
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });

            // Initialize GSAP
            gsap.registerPlugin(ScrollTrigger);

            // Initialize all components
            initNavigation();
            initCursorFollower();
            initCounters();
            initBackToTop();
            initScrollAnimations();
        });

        // Navigation functionality
        function initNavigation() {
            const navbar = document.getElementById('navbar');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('glass-effect');
                } else {
                    navbar.classList.remove('glass-effect');
                }
            });

            // Mobile menu toggle
            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('-translate-x-full');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                });

                // Close mobile menu when clicking on links
                mobileNavLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('-translate-x-full');
                        const icon = mobileMenuBtn.querySelector('i');
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    });
                });

                // Close mobile menu when clicking outside
                document.addEventListener('click', (e) => {
                    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                        mobileMenu.classList.add('-translate-x-full');
                        const icon = mobileMenuBtn.querySelector('i');
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                });
            }
        }

        // Cursor follower
        function initCursorFollower() {
            const cursor = document.getElementById('cursor-follower');
            if (!cursor) return;

            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursor.style.opacity = '1';
            });

            document.addEventListener('mouseleave', () => {
                cursor.style.opacity = '0';
            });

            function animateCursor() {
                cursorX += (mouseX - cursorX) * 0.1;
                cursorY += (mouseY - cursorY) * 0.1;
                
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
                
                requestAnimationFrame(animateCursor);
            }
            animateCursor();

            // Cursor hover effects
            const hoverElements = document.querySelectorAll('a, button, .cursor-hover');
            hoverElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'scale(2)';
                    cursor.style.backgroundColor = '#fbbf24';
                });
                
                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'scale(1)';
                    cursor.style.backgroundColor = '#14b8a6';
                });
            });
        }

        // Counter animation
        function initCounters() {
            const counters = document.querySelectorAll('.counter');

            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                // Start animation when element is in view
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateCounter();
                            observer.unobserve(entry.target);
                        }
                    });
                });

                observer.observe(counter);
            });
        }

        // Back to top button
        function initBackToTop() {
            const backToTopBtn = document.getElementById('back-to-top');
            if (!backToTopBtn) return;

            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.remove('opacity-0', 'invisible');
                    backToTopBtn.classList.add('opacity-100', 'visible');
                } else {
                    backToTopBtn.classList.add('opacity-0', 'invisible');
                    backToTopBtn.classList.remove('opacity-100', 'visible');
                }
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Scroll animations
        function initScrollAnimations() {
            // Parallax effect for hero background
            gsap.to('.hero-bg', {
                yPercent: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-bg',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Floating elements animation
            gsap.to('.animate-float', {
                y: -20,
                duration: 2,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: -1
            });
        }