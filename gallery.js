      // Gallery data
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
      const galleryData = [
            {
                id: 1,
                title: "Mount Everest at Sunrise",
                category: "mountains",
                location: "Everest Region",
                image: "img/depositphotos_20584587-stock-photo-evening-colored-view-of-everest.jpg",
                featured: true,
            },
            {
                id: 2,
                title: "Annapurna Range Reflection",
                category: "landscapes",
                location: "Annapurna Region",
                image: "img/Banner_and_thumbnail_pic-1630040937.jpeg",
                featured: false,
            },
            {
                id: 3,
                title: "Prayer Flags at Tengboche",
                category: "culture",
                location: "Everest Region",
                image: "img/6450241251_f9ce0286f9_b.jpg",
                featured: false,
            },
            {
                id: 4,
                title: "Sherpa Village in Khumbu",
                category: "culture",
                location: "Everest Region",
                image: "img/Most beautiful village Namche Ba.png",
                featured: false,
            },
            {
                id: 5,
                title: "Rhododendron Forest",
                category: "nature",
                location: "Langtang Region",
                image: "img/Rhododendron.jpg",
                featured: false,
            },
            {
                id: 6,
                title: "Trekker at Thorong La Pass",
                category: "adventure",
                location: "Annapurna Region",
                image: "img/Thorong-La-Pass.jpg",
                featured: false,
            },
            {
                id: 7,
                title: "Gokyo Lakes Panorama",
                category: "landscapes",
                location: "Everest Region",
                image: "img/Gokyo Lakes Panorama.jpg",
                featured: true,
            },
            {
                id: 8,
                title: "Kathmandu Durbar Square",
                category: "culture",
                location: "Kathmandu Valley",
                image: "img/kathmanduDS.jpeg",
                featured: false,
            },
            {
                id: 9,
                title: "Himalayan Sunrise",
                category: "mountains",
                location: "Various Regions",
                image: "img/Himalayan Sunrise.jpg",
                featured: false,
            },
            {
                id: 10,
                title: "Mountain Lake Reflection",
                category: "landscapes",
                location: "Langtang Region",
                image: "img/Mountain Lake Reflection.jpg",
                featured: false,
            },
            {
                id: 11,
                title: "Traditional Monastery",
                category: "culture",
                location: "Various Regions",
                image: "img/Nepal-Namobuddha-monastery-1-102.jpg",
                featured: false,
            },
            {
                id: 12,
                title: "Rock Climbing Adventure",
                category: "adventure",
                location: "Various Regions",
                image: "img/Rock Climbing Adventure.jpg",
                featured: false,
            }
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
            initGallery();
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

        // Gallery functionality
        function initGallery() {
            const galleryGrid = document.getElementById('gallery-grid');
            const filterButtons = document.querySelectorAll('.filter-btn');

            // Render gallery
            function renderGallery(images) {
                if (!galleryGrid) return;

                galleryGrid.innerHTML = '';

                images.forEach((image, index) => {
                    const galleryItem = createGalleryItem(image, index);
                    galleryGrid.appendChild(galleryItem);
                });

                // Re-initialize AOS for new elements
                AOS.refresh();
            }

            // Create gallery item element
            function createGalleryItem(image, index) {
                const item = document.createElement('div');
                item.className = 'gallery-item group cursor-pointer';
                item.setAttribute('data-category', image.category);
                item.setAttribute('data-aos', 'fade-up');
                item.setAttribute('data-aos-delay', (index * 100).toString());

                item.innerHTML = `
                    <div class="relative overflow-hidden rounded-2xl glass-effect hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                        <img src="${image.image}" alt="${image.title}" loading="lazy" 
                             class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 class="font-bold text-lg mb-2">${image.title}</h3>
                            <p class="text-sm text-gray-300 flex items-center">
                                <i class="fas fa-map-marker-alt mr-2 text-primary-400"></i>
                                ${image.location}
                            </p>
                        </div>
                        <div class="absolute top-4 right-4 bg-primary-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            ${image.category}
                        </div>
                    </div>
                `;

                // Add click handler for lightbox
                item.addEventListener('click', () => {
                    openLightbox(image);
                });

                return item;
            }

            // Filter gallery
            function filterGallery(category) {
                let filteredImages = galleryData;

                if (category !== 'all') {
                    filteredImages = galleryData.filter(image => image.category === category);
                }

                renderGallery(filteredImages);
            }

            // Filter button handlers
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active state
                    filterButtons.forEach(btn => {
                        btn.classList.remove('active', 'bg-primary-500');
                        btn.classList.add('glass-effect');
                    });
                    this.classList.add('active', 'bg-primary-500');
                    this.classList.remove('glass-effect');

                    // Filter gallery
                    const filter = this.getAttribute('data-filter');
                    filterGallery(filter);
                });
            });

            // Lightbox function
            function openLightbox(image) {
                const lightbox = document.createElement('div');
                lightbox.className = 'fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 opacity-0';
                lightbox.style.cursor = 'pointer';

                const lightboxContent = document.createElement('div');
                lightboxContent.className = 'max-w-4xl max-h-full text-center transform scale-95 transition-all duration-300';

                const img = document.createElement('img');
                img.src = image.image;
                img.alt = image.title;
                img.className = 'max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl';

                const caption = document.createElement('div');
                caption.className = 'text-white mt-6 glass-effect p-6 rounded-2xl';
                caption.innerHTML = `
                    <h3 class="text-2xl font-bold mb-2">${image.title}</h3>
                    <p class="text-gray-300 flex items-center justify-center">
                        <i class="fas fa-map-marker-alt mr-2 text-primary-400"></i>
                        ${image.location}
                    </p>
                `;

                const closeBtn = document.createElement('button');
                closeBtn.className = 'absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300';
                closeBtn.innerHTML = '<i class="fas fa-times"></i>';

                lightboxContent.appendChild(img);
                lightboxContent.appendChild(caption);
                lightbox.appendChild(lightboxContent);
                lightbox.appendChild(closeBtn);

                // Close lightbox handlers
                const closeLightbox = () => {
                    lightbox.style.opacity = '0';
                    lightboxContent.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        if (document.body.contains(lightbox)) {
                            document.body.removeChild(lightbox);
                        }
                    }, 300);
                };

                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) closeLightbox();
                });

                closeBtn.addEventListener('click', closeLightbox);

                const handleEscape = (e) => {
                    if (e.key === 'Escape') {
                        closeLightbox();
                        document.removeEventListener('keydown', handleEscape);
                    }
                };
                document.addEventListener('keydown', handleEscape);

                document.body.appendChild(lightbox);

                // Animate in
                setTimeout(() => {
                    lightbox.style.opacity = '1';
                    lightboxContent.style.transform = 'scale(1)';
                }, 10);
            }

            // Initial render
            renderGallery(galleryData);
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