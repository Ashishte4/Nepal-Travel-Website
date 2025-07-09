// Tour detail data
const tourDetailData = {
  "everest-base-camp": {
    title: "Everest Base Camp Trek",
    duration: "14 Days",
    difficulty: "Challenging",
    groupSize: "2-12 people",
    price: "1,299",
    rating: 5,
    reviews: 127,
    image:
      "img/Everest-Base-Camp-Trek.png",
    description:
      "Embark on the ultimate Himalayan adventure to the base of the world's highest peak. This iconic trek takes you through the heart of the Khumbu region, offering breathtaking mountain views, rich Sherpa culture, and the incredible achievement of reaching Everest Base Camp at 5,364 meters.",
    highlights: [
      "Reach Everest Base Camp (5,364m)",
      "Climb Kala Patthar for panoramic Everest views",
      "Experience authentic Sherpa culture",
      "Visit Tengboche Monastery",
      "Explore Sagarmatha National Park",
      "Fly into Lukla - one of the world's most dangerous airports",
    ],
    itinerary: [
      { day: 1, title: "Fly to Lukla, trek to Phakding", elevation: "2,652m", duration: "3-4 hours" },
      { day: 2, title: "Trek to Namche Bazaar", elevation: "3,438m", duration: "5-6 hours" },
      { day: 3, title: "Acclimatization day in Namche", elevation: "3,438m", duration: "Rest day" },
      { day: 4, title: "Trek to Tengboche", elevation: "3,867m", duration: "5-6 hours" },
      { day: 5, title: "Trek to Dingboche", elevation: "4,260m", duration: "5-6 hours" },
      { day: 6, title: "Acclimatization day in Dingboche", elevation: "4,260m", duration: "Rest day" },
      { day: 7, title: "Trek to Lobuche", elevation: "4,910m", duration: "5-6 hours" },
      { day: 8, title: "Trek to EBC and back to Gorak Shep", elevation: "5,364m", duration: "7-8 hours" },
      { day: 9, title: "Climb Kala Patthar, trek to Pheriche", elevation: "5,550m", duration: "6-7 hours" },
      { day: 10, title: "Trek to Namche Bazaar", elevation: "3,438m", duration: "6-7 hours" },
      { day: 11, title: "Trek to Lukla", elevation: "2,652m", duration: "6-7 hours" },
      { day: 12, title: "Fly back to Kathmandu", elevation: "1,400m", duration: "45 minutes" },
    ],
    included: [
      "Airport transfers in Kathmandu",
      "Domestic flights (Kathmandu-Lukla-Kathmandu)",
      "All accommodation during trek (tea houses)",
      "All meals during trek",
      "Professional English-speaking guide",
      "Porter service (1 porter for 2 trekkers)",
      "All necessary permits and fees",
      "First aid kit and oxygen meter",
      "Government taxes",
    ],
    notIncluded: [
      "International flights",
      "Nepal visa fees",
      "Accommodation in Kathmandu",
      "Personal trekking equipment",
      "Travel insurance",
      "Personal expenses",
      "Tips for guide and porter",
      "Emergency evacuation",
    ],
  },
  "annapurna-circuit": {
    title: "Annapurna Circuit Trek",
    duration: "12 Days",
    difficulty: "Moderate",
    groupSize: "2-15 people",
    price: "899",
    rating: 5,
    reviews: 89,
    image:
      "img/Hiker-800.jpg",
    description:
      "Experience the classic Annapurna Circuit trek through diverse landscapes, from subtropical forests to high alpine terrain. Cross the famous Thorong La Pass and immerse yourself in the rich cultural diversity of Nepal.",
    highlights: [
      "Cross Thorong La Pass (5,416m)",
      "Visit Muktinath Temple",
      "Experience diverse landscapes",
      "Traditional Gurung and Thakali villages",
      "Natural hot springs at Tatopani",
      "Stunning Annapurna mountain views",
    ],
    itinerary: [
      { day: 1, title: "Drive to Besisahar, trek to Bhulbhule", elevation: "840m", duration: "6-7 hours" },
      { day: 2, title: "Trek to Chame", elevation: "2,710m", duration: "5-6 hours" },
      { day: 3, title: "Trek to Pisang", elevation: "3,300m", duration: "5-6 hours" },
      { day: 4, title: "Trek to Manang", elevation: "3,519m", duration: "6-7 hours" },
      { day: 5, title: "Acclimatization day in Manang", elevation: "3,519m", duration: "Rest day" },
      { day: 6, title: "Trek to Yak Kharka", elevation: "4,018m", duration: "3-4 hours" },
      { day: 7, title: "Trek to Thorong Phedi", elevation: "4,450m", duration: "3-4 hours" },
      { day: 8, title: "Cross Thorong La Pass to Muktinath", elevation: "3,800m", duration: "7-8 hours" },
      { day: 9, title: "Trek to Marpha", elevation: "2,667m", duration: "4-5 hours" },
      { day: 10, title: "Trek to Tatopani", elevation: "1,190m", duration: "6-7 hours" },
      { day: 11, title: "Trek to Ghorepani", elevation: "2,874m", duration: "7-8 hours" },
      { day: 12, title: "Poon Hill sunrise, drive to Pokhara", elevation: "822m", duration: "6-7 hours" },
    ],
    included: [
      "Airport transfers",
      "All accommodation during trek",
      "All meals during trek",
      "Professional guide and porter",
      "All permits and fees",
      "Transportation as per itinerary",
      "First aid kit",
      "Government taxes",
    ],
    notIncluded: [
      "International flights",
      "Nepal visa fees",
      "Accommodation in Kathmandu/Pokhara",
      "Personal equipment",
      "Travel insurance",
      "Personal expenses",
      "Tips",
      "Emergency evacuation",
    ],
  },
  "langtang-valley": {
    title: "Langtang Valley Trek",
    duration: "8 Days",
    difficulty: "Easy-Moderate",
    groupSize: "2-12 people",
    price: "599",
    rating: 4,
    reviews: 56,
    image:
      "img/Langtang-stockphoto4-scaled-e1676457773525-1536x815.jpeg",
    description:
      'Discover the beautiful Langtang Valley, known as the "Valley of Glaciers." This trek offers stunning mountain views, rich Tamang culture, and the famous yak cheese factory at Kyanjin Gompa.',
    highlights: [
      "Langtang Lirung mountain views",
      "Visit Kyanjin Gompa monastery",
      "Famous yak cheese factory",
      "Rich Tamang culture",
      "Langtang National Park wildlife",
      "Close to Kathmandu",
    ],
    itinerary: [
      { day: 1, title: "Drive to Syabrubesi", elevation: "1,550m", duration: "7-8 hours" },
      { day: 2, title: "Trek to Lama Hotel", elevation: "2,380m", duration: "6-7 hours" },
      { day: 3, title: "Trek to Langtang Village", elevation: "3,430m", duration: "6-7 hours" },
      { day: 4, title: "Trek to Kyanjin Gompa", elevation: "3,870m", duration: "3-4 hours" },
      { day: 5, title: "Explore Kyanjin Gompa", elevation: "3,870m", duration: "Rest day" },
      { day: 6, title: "Trek back to Lama Hotel", elevation: "2,380m", duration: "6-7 hours" },
      { day: 7, title: "Trek to Syabrubesi", elevation: "1,550m", duration: "5-6 hours" },
      { day: 8, title: "Drive back to Kathmandu", elevation: "1,400m", duration: "7-8 hours" },
    ],
    included: [
      "Airport transfers",
      "Transportation to/from trailhead",
      "All accommodation during trek",
      "All meals during trek",
      "Professional guide and porter",
      "All permits and fees",
      "First aid kit",
    ],
    notIncluded: [
      "International flights",
      "Nepal visa fees",
      "Accommodation in Kathmandu",
      "Personal equipment",
      "Travel insurance",
      "Personal expenses",
      "Tips",
      "Emergency evacuation",
    ],
  },
}

// Initialize tour detail page
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const tourId = urlParams.get("tour")

  if (!tourId || !tourDetailData[tourId]) {
    showTourNotFound()
    return
  }

  const tour = tourDetailData[tourId]
  renderTourDetail(tour)
})

function renderTourDetail(tour) {
  // Render hero section
  renderTourHero(tour)

  // Render main content
  renderTourMain(tour)

  // Render sidebar
  renderTourSidebar(tour)
}

function renderTourHero(tour) {
  const heroSection = document.getElementById("tour-hero")
  if (!heroSection) return

  const stars = Array(5)
    .fill(0)
    .map((_, i) => `<i class="fas fa-star${i < tour.rating ? "" : " far"}"></i>`)
    .join("")

  heroSection.innerHTML = `
        <div class="hero-bg">
            <img src="${tour.image}" alt="${tour.title}">
            <div class="hero-overlay"></div>
        </div>
        <div class="tour-hero-content">
            <div class="container">
                <div class="tour-hero-info">
                    <span class="difficulty-badge">${tour.difficulty}</span>
                    <h1>${tour.title}</h1>
                    <div class="tour-hero-details">
                        <span><i class="fas fa-clock"></i> ${tour.duration}</span>
                        <span><i class="fas fa-users"></i> ${tour.groupSize}</span>
                        <span><i class="fas fa-star"></i> ${tour.rating} (${tour.reviews} reviews)</span>
                    </div>
                </div>
            </div>
        </div>
    `
}

function renderTourMain(tour) {
  const mainSection = document.getElementById("tour-main")
  if (!mainSection) return

  const highlightsHtml = tour.highlights
    .map(
      (highlight) =>
        `<div class="highlight-item">
            <i class="fas fa-mountain"></i>
            <span>${highlight}</span>
        </div>`,
    )
    .join("")

  const itineraryHtml = tour.itinerary
    .map(
      (day) =>
        `<div class="itinerary-day">
            <div class="itinerary-header">
                <span class="day-badge">Day ${day.day}</span>
                <div>
                    <h3 class="itinerary-title">${day.title}</h3>
                    <div class="itinerary-details">
                        <span>Elevation: ${day.elevation}</span>
                        <span>Duration: ${day.duration}</span>
                    </div>
                </div>
            </div>
        </div>`,
    )
    .join("")

  const includedHtml = tour.included.map((item) => `<li><i class="fas fa-check icon"></i> ${item}</li>`).join("")

  const notIncludedHtml = tour.notIncluded
    .map((item) => `<li><span class="icon not-included">×</span> ${item}</li>`)
    .join("")

  mainSection.innerHTML = `
        <div class="tour-section">
            <h2>Overview</h2>
            <p>${tour.description}</p>
        </div>
        
        <div class="tour-section">
            <h2>Trek Highlights</h2>
            <div class="highlights-grid">
                ${highlightsHtml}
            </div>
        </div>
        
        <div class="tour-section">
            <h2>Detailed Itinerary</h2>
            <div class="itinerary-list">
                ${itineraryHtml}
            </div>
        </div>
        
        <div class="tour-section">
            <div class="included-grid">
                <div class="included-section included">
                    <h3>What's Included</h3>
                    <ul class="included-list">
                        ${includedHtml}
                    </ul>
                </div>
                <div class="included-section not-included">
                    <h3>Not Included</h3>
                    <ul class="included-list">
                        ${notIncludedHtml}
                    </ul>
                </div>
            </div>
        </div>
    `
}

function renderTourSidebar(tour) {
  const sidebarSection = document.getElementById("tour-sidebar")
  if (!sidebarSection) return

  sidebarSection.innerHTML = `
        <div class="sidebar-card">
            <div class="price-section">
                <div class="price">$${tour.price}</div>
                <p class="price-note">per person</p>
            </div>
            
            <div class="tour-info">
                <div class="info-row">
                    <span class="info-label">Duration:</span>
                    <span class="info-value">${tour.duration}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Difficulty:</span>
                    <span class="sidebar-badge">${tour.difficulty}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Group Size:</span>
                    <span class="info-value">${tour.groupSize}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Best Season:</span>
                    <span class="info-value">Mar-May, Sep-Nov</span>
                </div>
            </div>
            
            <div class="sidebar-actions">
                <a href="contact.html" class="btn btn-primary btn-full">Book Now</a>
                <button class="btn btn-outline btn-full">
                    <i class="fas fa-heart"></i> Add to Wishlist
                </button>
                <button class="btn btn-outline btn-full">
                    <i class="fas fa-calendar"></i> Check Availability
                </button>
            </div>
            
            <div class="sidebar-contact">
                <p>Need help planning? Contact our experts</p>
                <p class="contact-number">+977-9815832466</p>
            </div>
        </div>
    `
}

function showTourNotFound() {
  const heroSection = document.getElementById("tour-hero")
  const mainSection = document.getElementById("tour-main")
  const sidebarSection = document.getElementById("tour-sidebar")

  if (heroSection) {
    heroSection.innerHTML = `
            <div class="container" style="padding: 5rem 0; text-align: center;">
                <h1>Tour Not Found</h1>
                <p>The tour you're looking for doesn't exist.</p>
                <a href="tours.html" class="btn btn-primary">Back to Tours</a>
            </div>
        `
  }

  if (mainSection) mainSection.innerHTML = ""
  if (sidebarSection) sidebarSection.innerHTML = ""
}
