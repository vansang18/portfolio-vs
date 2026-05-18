/* ==========================================================================
   INTERACTIVE JAVASCRIPT LOGIC - PORTFOLIO NGUYỄN VĂN SANG
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. CURSOR GLOW TRACKING EFFECT
    // ==========================================
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth lerp (linear interpolation) for cursor glow lag effect
    function animateCursorGlow() {
        const ease = 0.08;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        if (cursorGlow) {
            cursorGlow.style.left = `${currentX}px`;
            cursorGlow.style.top = `${currentY}px`;
        }

        requestAnimationFrame(animateCursorGlow);
    }
    animateCursorGlow();


    // ==========================================
    // 2. AUTO-TYPING EFFECT (HERO SUBTITLE)
    // ==========================================
    const typewriter = document.getElementById('typewriter');
    const words = [
        'Backend Developer...', 
        'Video Editor chuyên nghiệp...', 
        'Kỹ sư hệ thống đam mê...', 
        'Người kể chuyện bằng hình ảnh...'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Remove character
            typewriter.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Erase faster
        } else {
            // Add character
            typewriter.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120; // Normal typing speed
        }

        // Handle word switching
        if (!isDeleting && charIndex === currentWord.length) {
            // Word completed, pause before deleting
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to next word
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Small break before typing next
        }

        setTimeout(type, typingSpeed);
    }

    if (typewriter) {
        setTimeout(type, 1000); // Start after 1s
    }


    // ==========================================
    // 3. STICKY HEADER & ACTIVE SCROLL INDICATOR
    // ==========================================
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section, .timeline-section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Sticky Header add bg
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link highlighting on scroll
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Highlight a little early before section reaches top
            if (window.scrollY >= (sectionTop - 180)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });


    // ==========================================
    // 4. DARK / LIGHT THEME TOGGLE
    // ==========================================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Visual trigger effect on grid pattern opacity
            const grid = document.querySelector('.bg-grid');
            if (grid) {
                grid.style.opacity = newTheme === 'light' ? '0.15' : '0.4';
            }
        });
    }

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        if (theme === 'light') {
            themeIcon.className = 'fa-solid fa-sun';
            themeIcon.style.color = '#f1c40f';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
            themeIcon.style.color = '';
        }
    }


    // ==========================================
    // 5. MOBILE MENU NAVIGATION
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const mobileLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const menuOpenIcon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                menuOpenIcon.className = 'fa-solid fa-xmark';
            } else {
                menuOpenIcon.className = 'fa-solid fa-bars';
            }
        });

        // Close mobile nav on click links
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const menuOpenIcon = menuToggle.querySelector('i');
                menuOpenIcon.className = 'fa-solid fa-bars';
            });
        });
    }


    // ==========================================
    // 6. PROJECTS GRID FILTERING
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from other buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                card.style.transform = 'scale(0.85)';
                card.style.opacity = '0';
                
                setTimeout(() => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.transform = 'scale(1)';
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });


    // ==========================================
    // 7. VIDEO POPUP MODAL
    // ==========================================
    const videoModal = document.getElementById('videoModal');
    const modalIframe = document.getElementById('modalIframe');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const playVideoButtons = document.querySelectorAll('.play-video-btn');
    const videoCards = document.querySelectorAll('.project-card[data-category="video"]');

    function openVideo(videoUrl) {
        if (!videoModal || !modalIframe) return;
        modalIframe.src = videoUrl;
        videoModal.style.display = 'flex';
        
        // Add active classes for animation
        setTimeout(() => {
            videoModal.classList.add('active');
        }, 10);
    }

    function closeVideo() {
        if (!videoModal || !modalIframe) return;
        videoModal.classList.remove('active');
        
        setTimeout(() => {
            videoModal.style.display = 'none';
            modalIframe.src = '';
        }, 400);
    }

    // Bind play to card play buttons
    playVideoButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const card = btn.closest('.project-card');
            const videoSrc = card.getAttribute('data-video-src');
            if (videoSrc) {
                openVideo(videoSrc);
            }
        });
    });

    // Bind play directly to video cards clicking on empty space
    videoCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const videoSrc = card.getAttribute('data-video-src');
            // If click wasn't on standard link button
            if (videoSrc && !e.target.closest('.project-links a')) {
                openVideo(videoSrc);
            }
        });
    });

    // Bind close triggers
    if (modalClose) modalClose.addEventListener('click', closeVideo);
    if (modalOverlay) modalOverlay.addEventListener('click', closeVideo);

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideo();
        }
    });


    // ==========================================
    // 8. INTERACTIVE CONTACT FORM SUBMISSION
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');
    const resetFormBtn = document.getElementById('resetFormBtn');

    if (contactForm && contactSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect Form Data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                submittedAt: new Date().toISOString()
            };

            // Loading State trigger on button
            const submitBtn = contactForm.querySelector('.btn-submit');
            const origContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Đang gửi...';

            // Simulate Network delay
            setTimeout(() => {
                // Save locally to local storage as mock database storage
                const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                submissions.push(formData);
                localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

                // Slide animation for transitions
                contactForm.style.opacity = '0';
                setTimeout(() => {
                    contactForm.style.display = 'none';
                    contactSuccess.style.display = 'flex';
                    setTimeout(() => {
                        contactSuccess.style.opacity = '1';
                    }, 50);
                }, 400);

                // Restore button
                submitBtn.disabled = false;
                submitBtn.innerHTML = origContent;
                contactForm.reset();
            }, 1500);
        });
    }

    if (resetFormBtn && contactForm && contactSuccess) {
        resetFormBtn.addEventListener('click', () => {
            contactSuccess.style.display = 'none';
            contactForm.style.display = 'flex';
            setTimeout(() => {
                contactForm.style.opacity = '1';
            }, 50);
        });
    }

    // Mock Download CV alert
    const downloadCV = document.getElementById('downloadCV');
    if (downloadCV) {
        downloadCV.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Đang tải xuống CV bản PDF của Nguyễn Văn Sang. Cảm ơn bạn đã quan tâm!');
        });
    }
});
