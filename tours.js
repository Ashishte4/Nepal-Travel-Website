

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
                groupSize: "2-12 people",
                price: "1,299",
                rating: 5,
                reviews: 127,
                image: "img/Everest-Base-Camp-Trek.png",
                description: "The ultimate Himalayan adventure to the base of the world's highest peak. Experience breathtaking mountain views, Sherpa culture, and the achievement of reaching Everest Base Camp.",
                category: "challenging",
            },
            {
                id: "annapurna-circuit",
                title: "Annapurna Circuit Trek",
                duration: "12 Days",
                difficulty: "Moderate",
                groupSize: "2-15 people",
                price: "899",
                rating: 5,
                reviews: 89,
                image: "img/Hiker-800.jpg",
                description: "Classic trek through diverse landscapes and traditional villages. Cross the famous Thorong La Pass and experience the cultural diversity of Nepal.",
                category: "moderate",
            },
            {
                id: "langtang-valley",
                title: "Langtang Valley Trek",
                duration: "8 Days",
                difficulty: "Easy-Moderate",
                groupSize: "2-12 people",
                price: "599",
                rating: 4,
                reviews: 56,
                image: "img/Langtang-stockphoto4-scaled-e1676457773525-1536x815.jpeg",
                description: "Beautiful valley trek close to Kathmandu with stunning mountain views and rich Tamang culture. Visit the Langtang National Park and experience the warmth of local hospitality.",
                category: "easy",
            },
            {
                id: "manaslu-circuit",
                title: "Manaslu Circuit Trek",
                duration: "16 Days",
                difficulty: "Challenging",
                groupSize: "2-10 people",
                price: "1,499",
                rating: 5,
                reviews: 34,
                image: "img/Manaslu-circuit-trek.png",
                description: "Off-the-beaten-path adventure around the eighth highest mountain in the world . A truly unforgettable experience.",
                category: "challenging",
            },
            {
                id: "gokyo-lakes",
                title: "Gokyo Lakes Trek",
                duration: "12 Days",
                difficulty: "Moderate-Challenging",
                groupSize: "2-12 people",
                price: "1,199",
                rating: 5,
                reviews: 67,
                image: "img/gokyo-lake-1536x1152.jpg",
                description: "Stunning trek to the sacred Gokyo Lakes with panoramic views from Gokyo Ri. A perfect destination to seek for.",
                category: "moderate",
            },
            {
                id: "upper-mustang",
                title: "Upper Mustang Trek",
                duration: "10 Days",
                difficulty: "Moderate",
                groupSize: "2-12 people",
                price: "1,399",
                rating: 4,
                reviews: 23,
                image: "img/upper-mustang-trek-2.jpg",
                description: "Journey to the forbidden kingdom of Lo Manthang in the rain shadow of the Himalayas.",
                category: "moderate",
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
            initToursGrid();
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

        // Tours grid functionality
        function initToursGrid() {
            const toursGrid = document.getElementById('tours-grid');
            const filterButtons = document.querySelectorAll('.filter-btn');

            // Render tours
            function renderTours(tours) {
                if (!toursGrid) return;

                toursGrid.innerHTML = '';

                tours.forEach((tour, index) => {
                    const tourCard = createTourCard(tour);
                    tourCard.setAttribute('data-aos', 'fade-up');
                    tourCard.setAttribute('data-aos-delay', (index * 100).toString());
                    toursGrid.appendChild(tourCard);
                });

                // Refresh AOS
                AOS.refresh();
            }

            // Create tour card element
            function createTourCard(tour) {
                const card = document.createElement('div');
                card.className = 'tour-card glass-effect rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group';
                card.setAttribute('data-tour', tour.id);

                const stars = Array(5).fill(0).map((_, i) => 
                    `<i class="fas fa-star ${i < tour.rating ? 'text-accent-400' : 'text-gray-400'}"></i>`
                ).join('');

                card.innerHTML = `
                    <div class="relative overflow-hidden">
                        <img src="${tour.image}" alt="${tour.title}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full font-semibold">
                            $${tour.price}
                        </div>
                        <div class="absolute bottom-4 left-4 flex items-center space-x-1">
                            ${stars}
                            <span class="text-sm text-gray-300 ml-2">(${tour.reviews})</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">${tour.title}</h3>
                        <p class="text-gray-400 mb-4 line-clamp-3">${tour.description}</p>
                        <div class="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                            <div class="flex items-center gap-1">
                                <i class="fas fa-clock text-primary-400"></i>
                                ${tour.duration}
                            </div>
                            <div class="flex items-center gap-1">
                                <i class="fas fa-signal text-primary-400"></i>
                                ${tour.difficulty}
                            </div>
                            <div class="flex items-center gap-1">
                                <i class="fas fa-users text-primary-400"></i>
                                ${tour.groupSize}
                            </div>
                        </div>
                        <div class="pt-4 border-t border-gray-700">
                            <button class="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                View Details
                            </button>
                        </div>
                    </div>
                `;

                // Add click handler
                card.addEventListener('click', () => {
                    window.location.href = `tour-detail.html?tour=${tour.id}`;
                });

                return card;
            }

            // Filter tours
            function filterTours(category) {
                let filteredTours = toursData;

                if (category !== 'all') {
                    filteredTours = toursData.filter((tour) => {
                        switch (category) {
                            case 'easy':
                                return tour.category === 'easy';
                            case 'moderate':
                                return tour.category === 'moderate';
                            case 'challenging':
                                return tour.category === 'challenging';
                            default:
                                return true;
                        }
                    });
                }

                renderTours(filteredTours);
            }

            // Filter button handlers
            filterButtons.forEach((button) => {
                button.addEventListener('click', function () {
                    // Update active state
                    filterButtons.forEach((btn) => {
                        btn.classList.remove('active', 'bg-primary-500');
                        btn.classList.add('glass-effect');
                    });
                    this.classList.add('active', 'bg-primary-500');
                    this.classList.remove('glass-effect');

                    // Filter tours
                    const filter = this.getAttribute('data-filter');
                    filterTours(filter);
                });
            });

            // Initial render
            renderTours(toursData);
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
    