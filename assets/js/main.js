// FAQ Switch & Akkordeon Funktionalität
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Daten
    const faqs = {
        unternehmen: [
            {q: 'Wie wird die DSGVO-Konformität sichergestellt?', a: 'Unsere Plattform erfüllt alle Anforderungen der DSGVO. Daten werden verschlüsselt gespeichert und verarbeitet. Zugriff erhalten nur autorisierte Personen.'},
            {q: 'Wie schnell sieht man erste Ergebnisse?', a: 'Erste positive Veränderungen sind oft schon nach wenigen Wochen sichtbar, abhängig von der Nutzung und dem Engagement der Teilnehmer.'},
            {q: 'Woher bekommen die Mitarbeiter die Wearables?', a: 'Die Wearables werden direkt von uns an die teilnehmenden Unternehmen geliefert und vor Ort verteilt.'},
            {q: 'Gibt es eine Mindestvertragslaufzeit?', a: 'Nein, es gibt keine Mindestvertragslaufzeit. Sie können das Angebot jederzeit kündigen.'},
            {q: 'Wie funktionieren Belohnungen?', a: 'Belohnungen werden durch das Sammeln von Health Points freigeschaltet und können für verschiedene Angebote eingelöst werden.'}
        ],
        partner: [
            {q: 'Wie werde ich Partner?', a: 'Kontaktieren Sie uns über das Formular. Wir melden uns mit allen Details.'},
            {q: 'Welche Voraussetzungen gibt es?', a: 'Sie benötigen ein passendes Angebot im Bereich Gesundheit, Fitness oder Prävention.'},
            {q: 'Wie läuft die Abrechnung?', a: 'Die Abrechnung erfolgt monatlich, transparent und digital.'}
        ],
        nutzer: [
            {q: 'Wie installiere ich die App?', a: 'Laden Sie die App im App Store oder Google Play Store herunter und registrieren Sie sich mit Ihrem Zugangscode.'},
            {q: 'Welche Wearables werden unterstützt?', a: 'Wir unterstützen die gängigsten Wearables wie Apple Watch, Fitbit, Garmin und viele mehr.'},
            {q: 'Wie kann ich Punkte sammeln?', a: 'Durch tägliche Aktivität, Challenges und das Erreichen von Gesundheitszielen sammeln Sie automatisch Punkte.'}
        ]
    };

        function renderFaq(type) {
                const container = document.getElementById('faq-content');
                container.innerHTML = faqs[type].map(faq => `
                    <div class="faq-item" style="background:rgba(255,255,255,0.75); border-radius:24px; box-shadow:0 8px 32px 0 rgba(31,38,135,0.10); border:1.5px solid rgba(255,255,255,0.35); margin-bottom:12px; overflow:hidden; transition:box-shadow 0.2s, border 0.2s; backdrop-filter: blur(14px);">
                        <button class="faq-question" style="width:100%; text-align:left; background:none; border:none; outline:none; font-size:19px; font-weight:600; color:#222; padding:28px 36px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:background 0.18s, color 0.18s;">
                            <span>${faq.q}</span>
                            <span class="faq-icon" style="display:inline-block; width:28px; height:28px; position:relative; transition:transform 0.18s;">
                                <span style="position:absolute;left:13px;top:4px;width:2px;height:20px;background:#888;border-radius:2px;display:block;transition:all 0.22s cubic-bezier(.4,1.4,.6,1);transform-origin:center center;"></span>
                                <span style="position:absolute;left:4px;top:13px;width:20px;height:2px;background:#888;border-radius:2px;display:block;transition:all 0.22s cubic-bezier(.4,1.4,.6,1);transform-origin:center center;"></span>
                            </span>
                        </button>
                        <div class="faq-answer" style="display:none; padding:0 36px 28px 36px; color:#555; font-size:17px; line-height:1.6; background:rgba(255,255,255,0.92); border-radius:0 0 24px 24px;">${faq.a}</div>
                    </div>
                `).join('');
                addAccordionListeners();
                // Card Hover Effekt
                document.querySelectorAll('.faq-item').forEach(card => {
                    card.addEventListener('mouseenter', () => {
                        card.style.boxShadow = '0 12px 36px 0 rgba(31,38,135,0.16)';
                        card.style.border = '1.5px solid #e0e7ef';
                    });
                    card.addEventListener('mouseleave', () => {
                        card.style.boxShadow = '0 8px 32px 0 rgba(31,38,135,0.10)';
                        card.style.border = '1.5px solid rgba(255,255,255,0.35)';
                    });
                });
        }

    function addAccordionListeners() {
        var questions = document.querySelectorAll('.faq-question');
        questions.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var answer = btn.nextElementSibling;
                var isOpen = answer.style.display === 'block';
                document.querySelectorAll('.faq-answer').forEach(function(a) { a.style.display = 'none'; });
                // Alle Icons zurücksetzen: Plus
                document.querySelectorAll('.faq-icon').forEach(function(icon) {
                    icon.children[0].style.transform = 'rotate(0deg)';
                    icon.children[1].style.transform = 'rotate(0deg)';
                });
                if (!isOpen) {
                    answer.style.display = 'block';
                    // Icon zu X verwandeln (beide Linien sichtbar, gekreuzt)
                    var icon = btn.querySelector('.faq-icon');
                    if(icon) {
                        icon.children[0].style.transform = 'rotate(45deg)';
                        icon.children[1].style.transform = 'rotate(45deg)';
                    }
                }
            });
        });
    }

        // Switch Buttons (Liquid Glass Optik)
        document.querySelectorAll('.faq-switch-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.faq-switch-btn').forEach(b => {
                    b.classList.remove('active');
                    b.style.background = 'rgba(255,255,255,0.18)';
                    b.style.color = '#888';
                    b.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                    b.style.border = '1.5px solid rgba(255,255,255,0.25)';
                    b.style.backdropFilter = 'blur(8px)';
                });
                btn.classList.add('active');
                btn.style.background = 'rgba(255,255,255,0.35)';
                btn.style.color = '#222';
                btn.style.boxShadow = '0 4px 24px 0 rgba(0,0,0,0.10),0 1.5px 0 0 rgba(255,255,255,0.25) inset';
                btn.style.border = '1.5px solid rgba(255,255,255,0.5)';
                btn.style.backdropFilter = 'blur(12px)';
                renderFaq(btn.dataset.faq);
            });
        });

    // Initial Render
    renderFaq('unternehmen');
});
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
        if (typeof ScrollToPlugin !== 'undefined') {
            gsap.registerPlugin(ScrollToPlugin);
        }
        
        // Smooth Scroll for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // Nur interne Links behandeln
                const targetId = this.getAttribute('href');
                if (!targetId || targetId === '#' || targetId.indexOf('#') !== 0) return;
                
                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;

                // SPEZIAL-FIX für '#science' (Wie?):
                if (targetId === '#science') {
                    const st = ScrollTrigger.getById("how-pin");
                    const howSection = document.querySelector('#how');
                    const cycleWrapper = document.querySelector('.cycle-wrapper');
                    
                    if (st && howSection && cycleWrapper) {
                        e.preventDefault();
                        
                        // Berechnung:
                        // Wir starten bei st.end (Ende der Animation, #how ist am oberen Bildschirmrand).
                        // Wir wollen #science sehen.
                        // Die visuelle Höhe von #how ist nach der Animation = (Gesamthöhe - Höhe des kollabierten Kreises).
                        // Wir scrollen also exakt diese 'verbleibende Höhe' weiter.
                        
                        const currentHowHeight = howSection.offsetHeight;
                        const cycleHeight = cycleWrapper.offsetHeight; // Das wird später 0 sein, ist jetzt aber noch da.
                        
                        // Das ist die Höhe des Inhalts, der VOR #science steht und sichtbar bleibt (Header + Grid).
                        const contentToScrollPast = currentHowHeight - cycleHeight;
                        
                        // Wir addieren einen Header-Buffer (-100px), damit die #science Überschrift nicht verdeckt wird.
                        // Aber wir müssen sicherstellen, dass wir das Grid ganz verlassen. 
                        // Sagen wir: Wir wollen, dass #science bei ca. 120px vom Top startet.
                        
                        const targetPos = st.end + contentToScrollPast + 20; // +20 für ein bisschen "Luft" zwischen Grid und Top

                        gsap.to(window, {
                            duration: 0.8, 
                            scrollTo: targetPos, 
                            ease: "power2.out"
                        });
                        return;
                    }
                }
                
                // Standard Smooth Scroll für alle anderen Links
                e.preventDefault();
                
                // Header Height Buffer (damit Titel nicht verdeckt wird)
                const headerOffset = 100;

                gsap.to(window, {
                    duration: 1.0,
                    scrollTo: {
                        y: targetElement,
                        offsetY: headerOffset,
                        autoKill: false 
                    },
                    ease: "power2.out" // Konsistentes Easing
                });
            });
        });
        
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
                    id: "how-pin",
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
                ease: "none" // Linear ease for direct 1:1 scroll control (smoother feel)
            })
            // The benefits grid naturally moves up because cycleWrapper height goes to 0.
            .to(cycleWrapper.querySelector('.cycle-container'), {
                 scale: 0.5,
                 duration: 1,
                 ease: "none"
            }, "<");
            
            // Pull the next section up to close the gap dynamically
            if (scienceSection) {
                // Use the calculated height for the negative margin
                tl.to(scienceSection, {
                    marginTop: -cycleHeight, 
                    duration: 1,
                    ease: "none"
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

    /* --- 3D Chip Card Tilt Effect --- */
    const cards = document.querySelectorAll(".pricing-card-v2__image");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate tilt degrees (max 20deg)
            const rotateX = ((y - centerY) / centerY) * -20; 
            const rotateY = ((x - centerX) / centerX) * 20;

            // Apply transform with perspective
            // Scale up slightly to enhance "lift" feeling
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener("mouseleave", () => {
            // Reset state
            card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
            // Add transition for smooth return
            card.style.transition = "transform 0.5s ease";
        });

        card.addEventListener("mouseenter", () => {
            // Remove transition during movement for instant response
            card.style.transition = "none";
        });
    });

    /* --- FULL 3D CARD INTERACTION --- */
    // Target the full card container now
    const fullCards = document.querySelectorAll(".full-3d-card");

    fullCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Softer tilt for larger object (max 8deg)
            const rotateX = ((y - centerY) / centerY) * -8; 
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transition = "none";
            // 60px translateZ gives it "volume" in perspective
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Adjust shine position based on mouse
            const shine = card.querySelector('.card-shine');
            if(shine) {
                const moveX = ((x - centerX) / centerX) * -20; 
                const moveY = ((y - centerY) / centerY) * -20;
                shine.style.backgroundPosition = `${moveX}% ${moveY}%`;
            }
        });

        card.addEventListener("mouseleave", () => {
            card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
            card.style.transform = "rotateX(0) rotateY(0) scale3d(1, 1, 1)";
        });
        
        card.addEventListener("mouseenter", () => {
            // instant engage
            card.style.transition = "none";
        });
    });

    /* --- REALISTIC CREDIT CARD TILT EFFECT --- */
    const creditCards = document.querySelectorAll(".credit-card-3d");

    creditCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Standard card tilt (approx 15deg max)
            const rotateX = ((y - centerY) / centerY) * -15; 
            const rotateY = ((x - centerX) / centerX) * 15;

            card.style.transition = "none";
            // Less z-depth needed since it's a smaller object
            // Add a slight translation to follow mouse
            // const transX = ((x - centerX) / centerX) * 5;
            // const transY = ((y - centerY) / centerY) * 5;

            // REMOVED scale3d(1.02) to prevent scaling blur artifacts
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            
            // Adjust shine using CSS variables for high performance
            const shine = card.querySelector('.card-shine');
            if(shine) {
                // Calculate percentage positions (0% to 100%)
                const perX = (x / rect.width) * 100;
                const perY = (y / rect.height) * 100;
                
                // Set CSS variables directly
                shine.style.setProperty('--shine-x', `${perX}%`);
                shine.style.setProperty('--shine-y', `${perY}%`);
            }
        });

        card.addEventListener("mouseleave", () => {
            card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
            card.style.transform = "rotateX(0) rotateY(0) scale3d(1, 1, 1)";
            
            // Fix blur: Remove transform after animation AND force flat rendering
            setTimeout(() => {
                if (!card.matches(':hover')) {
                    card.style.transform = "none";
                    card.style.transformStyle = "flat"; 
                }
            }, 600);
        });
        
        card.addEventListener("mouseenter", () => {
             card.style.transition = "none";
             card.style.transformStyle = "preserve-3d"; // Re-enable 3D for children
        });
    });
