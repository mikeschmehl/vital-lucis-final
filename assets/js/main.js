// Liquid Glass Navbar Effekte
document.addEventListener('DOMContentLoaded', () => {
    console.log('main.js geladen.');

    const header = document.getElementById('header');
    if(header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Liquid Sliding Pill Effekt
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    
    if (navLinks && links.length > 0) {
        links.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                const rect = link.getBoundingClientRect();
                const navRect = navLinks.getBoundingClientRect();
                
                navLinks.style.setProperty('--pill-left', `${rect.left - navRect.left}px`);
                navLinks.style.setProperty('--pill-width', `${rect.width}px`);
                navLinks.style.setProperty('--pill-height', `${rect.height}px`);
                navLinks.style.setProperty('--pill-top', `${rect.top - navRect.top}px`);
                
                navLinks.classList.add('has-active');
            });
        });
        
        navLinks.addEventListener('mouseleave', () => {
            navLinks.classList.remove('has-active');
        });
    }
});
    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // GSAP Scroll Animation for Cycle Section
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        const cycleWrapper = document.querySelector('.cycle-wrapper');
        const benefitsGrid = document.querySelector('.benefits-grid');
        const sectionHeader = document.querySelector('#how .section-header');
        const scienceSection = document.querySelector('#science');
        
        if (cycleWrapper && benefitsGrid) {
            // Set initial state for smoother animation
            gsap.set(cycleWrapper, { transformOrigin: "center top", overflow: "hidden" });
            
            // Calculate height explicitly to avoid layout jumps
            const cycleHeight = cycleWrapper.offsetHeight;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#how",
                    start: "top top+=80", // Start pinning when section is slightly down (below header)
                    end: "+=800",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true // Ensure calculations update on resize
                }
            });

            // The header stays put.
            // The cycle wrapper shrinks and fades out.
            tl.to(cycleWrapper, {
                height: 0,
                opacity: 0,
                marginBottom: 0,
                marginTop: 0,
                scale: 0.8,
                duration: 1,
                ease: "power2.inOut"
            })
            // The benefits grid naturally moves up because cycleWrapper height goes to 0.
            .to(cycleWrapper.querySelector('.cycle-container'), {
                 scale: 0.5,
                 duration: 1
            }, "<");
            
            // Pull the next section up to close the gap dynamically
            if (scienceSection) {
                // Use the calculated height for the negative margin
                tl.to(scienceSection, {
                    marginTop: -cycleHeight, 
                    duration: 1,
                    ease: "power2.inOut"
                }, "<");
            }
        }
    }

    // Slider Logic
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    const dots = document.querySelectorAll('.dot-nav');
    
    // Timeline Elements
    const timelineCircle = document.querySelector('.timeline-indicator');
    const timelineText = document.querySelector('.timeline-svg text');
    
    // Positions on flat line (M 100,80 L 900,80)
    // Ball rolls ON the line (y=64 center). Text above it.
    const timelinePositions = [
        { pct: "0%", x: 100, y: 35, label: "Kickoff" },
        { pct: "33%", x: 366, y: 35, label: "Setup" },
        { pct: "66%", x: 633, y: 35, label: "Active" },
        { pct: "100%", x: 900, y: 35, label: "Review" }
    ];

    let currentSlide = 0; 
    
    // Init Logic to find active slide
    slides.forEach((s, i) => {
        if(s.classList.contains('active')) currentSlide = i;
    });
    // Ensure initial CSS state matches
    updateTimeline(currentSlide);

    function updateTimeline(index) {
        // if (!timelineCircle || !timelineText) return; // Allow running even if elements missing for robustness
        const pos = timelinePositions[index];
        
        if (timelineCircle) {
            // Use CSS offset-distance for smooth path following
            timelineCircle.style.offsetDistance = pos.pct;
        }

        if (timelineText) {
             if (typeof gsap !== 'undefined') {
                gsap.to(timelineText, { 
                    attr: { x: pos.x, y: pos.y - 15 }, 
                    duration: 0.6, 
                    ease: "power2.out"
                });
             } else {
                 timelineText.setAttribute('x', pos.x);
                 timelineText.setAttribute('y', pos.y - 15);
             }
             timelineText.textContent = pos.label;
        }
    }

    function showSlide(index) {
        // Wrap index (0 to 3)
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        // Remove active class from all
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Add active class to new slide
        slides[index].classList.add('active');
        
        // Update dots
        if (dots && dots.length > 0) {
            dots.forEach(d => d.classList.remove('active'));
            if(dots[index]) dots[index].classList.add('active');
        }
        
        updateTimeline(index);
        currentSlide = index;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
        
        // Dot Click Events
        if (dots && dots.length > 0) {
            dots.forEach((dot, idx) => {
                dot.addEventListener('click', () => {
                    showSlide(idx);
                });
            });
        }
    }
