// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")

// Get all dropdown toggles and lists
const navToggles = document.querySelectorAll('[id^="nav-dropdown-toggle-"]')
const navDropdowns = document.querySelectorAll('[id^="nav-dropdown-list-"]')

document.addEventListener('DOMContentLoaded', function() {
    // Hero video mute/unmute toggle
    const heroVideo = document.getElementById('hero-video')
    const muteToggle = document.getElementById('video-mute-toggle')
    if (heroVideo && muteToggle) {
        muteToggle.addEventListener('click', function() {
            if (heroVideo.muted) {
                heroVideo.muted = false
                muteToggle.innerHTML = '<i class="bi bi-volume-up-fill"></i>'
                muteToggle.setAttribute('aria-label', 'Mute video')
                muteToggle.setAttribute('title', 'Mute')
            } else {
                heroVideo.muted = true
                muteToggle.innerHTML = '<i class="bi bi-volume-mute-fill"></i>'
                muteToggle.setAttribute('aria-label', 'Unmute video')
                muteToggle.setAttribute('title', 'Unmute')
            }
        })
    }

    // Initialize particles only if the target exists
    if (window.particlesJS && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: '#53a2ca' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
        });
    }

    // Mobile nav toggle (raw CSS header)
    const menuBtn = document.querySelector('.menu-toggle');
    const mobileBackdrop = document.querySelector('.mobile-backdrop');
    const primaryNav = document.querySelector('.header .nav');
    if (menuBtn && primaryNav) {
        const closeNav = () => {
            document.body.classList.remove('nav-open');
            menuBtn.setAttribute('aria-expanded', 'false');
        };
        const openNav = () => {
            document.body.classList.add('nav-open');
            menuBtn.setAttribute('aria-expanded', 'true');
        };
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (document.body.classList.contains('nav-open')) closeNav(); else openNav();
        });
        mobileBackdrop && mobileBackdrop.addEventListener('click', closeNav);
        // Close when clicking a link (improves UX)
        primaryNav.addEventListener('click', (e) => {
            const target = e.target.closest('a');
            if (target) closeNav();
        });
        // ESC to close
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
    }

    // Donate links: open WhatsApp directly (no QR modal)
    const donateLinks = document.querySelectorAll('.donate-link');
    const donateModalBg = document.getElementById('donate-modal-bg');
    const donateCloseBtns = document.querySelectorAll('.donate-close');
    const DONATE_URL = 'https://wa.link/srbjfv';

    // Ensure donate buttons point to WhatsApp directly
    if (donateLinks.length) {
        donateLinks.forEach(a => {
            a.setAttribute('href', DONATE_URL);
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener');
        });
    }

    // Backward compatibility: only wire modal listeners if the modal exists on page
    if (donateModalBg && donateLinks.length) {
        function openDonateModal(openExternal = false){
            if (openExternal) window.open(DONATE_URL, '_blank');
            donateModalBg.classList.add('show');
            document.body.classList.add('modal-open');
        }
        function closeDonateModal(){
            donateModalBg.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
        donateLinks.forEach(a => {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                openDonateModal(true);
            });
        });
        donateCloseBtns.forEach(b => b.addEventListener('click', closeDonateModal));
        donateModalBg.addEventListener('click', (e) => { if (e.target === donateModalBg) closeDonateModal(); });
    }

    // Reveal-on-scroll animations (CSS-based)
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(el => io.observe(el));
    }
});

// Update your video functions
const videoBg = document.getElementById('video-container-bg');
const videoContainer = document.getElementById('video-container');

function openVideo() {
    if (!videoBg || !videoContainer) return;
    videoBg.classList.add('show');
    videoContainer.classList.add('open');
    document.body.classList.add('modal-open');
}

function closeVideo() {
    if (!videoBg || !videoContainer) return;
    videoContainer.classList.remove('open');
    setTimeout(() => { videoBg.classList.remove('show'); }, 300);
    document.body.classList.remove('modal-open');
}
// Initialize Swiper (only if present on page)
if (window.Swiper && document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

// Animated Counters (guarded for pages without GSAP)
if (window.gsap) {
    const counters = document.querySelectorAll('.countup');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        
        gsap.to(counter, {
            scrollTrigger: {
                trigger: counter,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            innerText: target,
            duration: 2,
            snap: { innerText: 1 }
        });
    });
}

function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("max-lg:!tw-opacity-100", "tw-min-h-[90vh]")
        collapseHeaderItems.style.height = "90vh"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        document.body.classList.add("modal-open")

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("max-lg:!tw-opacity-100", "tw-min-h-[90vh]")
        collapseHeaderItems.style.height = "0vh"
        
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")  
        
        collapseBtn.classList.add("bi-list")
        document.body.classList.remove("modal-open")

        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const isOpen = dropdown.getAttribute('data-open') === 'true';

    dropdown.setAttribute('data-open', !isOpen);

    if (!isOpen) {
        dropdown.classList.remove('tw-scale-0', 'tw-opacity-0', 'max-lg:tw-h-0', 'max-lg:tw-w-0');
        dropdown.classList.add('tw-scale-100', 'tw-opacity-100', 'max-lg:tw-h-auto', 'max-lg:tw-w-full');
    } else {
        dropdown.classList.remove('tw-scale-100', 'tw-opacity-100', 'max-lg:tw-h-auto', 'max-lg:tw-w-full');
        dropdown.classList.add('tw-scale-0', 'tw-opacity-0', 'max-lg:tw-h-0', 'max-lg:tw-w-0');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('[id^="nav-dropdown-toggle-"]');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const dropdownId = toggle.id.replace('toggle', 'list');
            toggleDropdown(dropdownId);
        });
    });
});

function responsive() {
    if (!isHeaderCollapsed){
        toggleHeader()
    }

    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.height = ""
        
        // Add hover events for all dropdowns
        navToggles.forEach((toggle, index) => {
            const dropdown = navDropdowns[index]
            toggle.addEventListener("mouseenter", () => openNavDropdown(dropdown))
            toggle.addEventListener("mouseleave", () => navMouseLeave(dropdown))
            dropdown.addEventListener("mouseleave", () => closeNavDropdown(dropdown))
        })

    } else {
        isHeaderCollapsed = true
        
        // Remove hover events for all dropdowns
        navToggles.forEach((toggle, index) => {
            const dropdown = navDropdowns[index]
            toggle.removeEventListener("mouseenter", () => openNavDropdown(dropdown))
            toggle.removeEventListener("mouseleave", () => navMouseLeave(dropdown))
            dropdown.removeEventListener("mouseleave", () => closeNavDropdown(dropdown))
        })
    }
}
// Initialize header responsiveness only if legacy header elements exist
if (collapseHeaderItems && collapseBtn) {
    responsive()
    window.addEventListener("resize", responsive)
}

/** Dark and light theme */
if (localStorage.getItem('color-mode') === 'dark' || (!('color-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('tw-dark')
    updateToggleModeBtn()
} else {
    document.documentElement.classList.remove('tw-dark')
    updateToggleModeBtn()
}

function toggleMode(){
    //toggle between dark and light mode
    document.documentElement.classList.toggle("tw-dark")
    updateToggleModeBtn()
    
}

function updateToggleModeBtn(){
    const toggleIcon = document.querySelector("#toggle-mode-icon")
    if (!toggleIcon) {
        // No toggle icon present on this page; safely skip updates
        return;
    }
    if (document.documentElement.classList.contains("tw-dark")){
        // dark mode
        toggleIcon.classList.remove("bi-sun")
        toggleIcon.classList.add("bi-moon")
        localStorage.setItem("color-mode", "dark")
        
    }else{
        toggleIcon.classList.add("bi-sun")
        toggleIcon.classList.remove("bi-moon")
        localStorage.setItem("color-mode", "light")
    }

}


// Prompt widget (guarded for pages that include it)
let promptWindow = null
const playgroundExists = document.querySelector("#pixa-playground")
if (playgroundExists && window.Prompt) {
    promptWindow = new Prompt("#pixa-playground")
}

const promptForm = document.querySelector("#prompt-form")
const promptInput = promptForm ? promptForm.querySelector("input[name='prompt']") : null

const MAX_PROMPTS = 3

if (promptForm && promptWindow) {
    promptForm.addEventListener("submit", (event) => {
        event.preventDefault()

        if (promptWindow.promptList.length >= MAX_PROMPTS)
            return false

        promptWindow.addPrompt(promptInput.value)
        promptInput.value = ""
        
        if (promptWindow.promptList.length >= MAX_PROMPTS){
            // prompt signup once the user makes 3 prompts, ideally must be throttled via backend API
            const signUpPrompt = document.querySelector("#signup-prompt")
            if (signUpPrompt) {
                signUpPrompt.classList.add("tw-scale-100")
                signUpPrompt.classList.remove("tw-scale-0")
            }

            promptForm.querySelectorAll("input").forEach(e => {e.disabled = true})
        }

        return false
    })
}

// Initialize any generic dropdown widgets only if available
if (window.Dropdown && promptWindow) {
    const dropdowns = document.querySelectorAll('.dropdown')
    dropdowns.forEach(dropdown => new Dropdown(`#${dropdown.id}`, promptWindow.setAIModel))
}

// Setup click and hover events for navigation dropdowns are handled in responsive() function

function navMouseLeave(dropdown){
    setTimeout(() => closeNavDropdown(dropdown), 100)
}

function openNavDropdown(dropdown){
    if (!dropdown) return
    
    dropdown.classList.add("tw-opacity-100", "tw-scale-100", 
                            "max-lg:tw-min-h-[450px]", "max-lg:!tw-h-fit", "tw-min-w-[320px]")
    
    dropdown.setAttribute("data-open", true)

}

function closeNavDropdown(dropdown){
    if (!dropdown) return
    
    // console.log("event target: ", event.target, event.target.contains(navDropdown))
    
    if (dropdown.matches(":hover")){
        return
    }

    dropdown.classList.remove("tw-opacity-100", "tw-scale-100", 
        "max-lg:tw-min-h-[450px]", "tw-min-w-[320px]", "max-lg:!tw-h-fit",)

    dropdown.setAttribute("data-open", false)

}


/**
 * Animations
 */

// const typed = new Typed('#prompts-sample', {
//     strings: [
//         "What is Academy-X.co?",
//         "How can Academy-X.co help me master PCH 331?",
//         "What are the benefits of using Academy-X.co?",
//         "How do I sign up for Academy-X.co?",
//         "What topics are covered in PCH 331 at Academy-X.co?",
//         "How can I access the free launch offer for PCH 331?"
//     ],
//     typeSpeed: 80,
//     smartBackspace: true, 
//     loop: true,
//     backDelay: 2000,
// })

// Register and run GSAP animations only if GSAP is available
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".reveal-up", {
        opacity: 0,
        y: "100%",
    })
}


// straightens the slanting image (guarded for pages without GSAP)
if (window.gsap && window.ScrollTrigger) {
    gsap.to("#dashboard", {
        scale: 1,
        translateY: 0,
        rotateX: "0deg",
        scrollTrigger: {
            trigger: "#hero-section",
            start: window.innerWidth > RESPONSIVE_WIDTH ? "top 95%" : "top 70%",
            end: "bottom bottom",
            scrub: 1,
        }
    })
}

function initFaqAccordions(){
    const faqAccordion = document.querySelectorAll('.faq-accordion')
    if (!faqAccordion.length) return
    faqAccordion.forEach(function (btn) {
        // Prevent duplicate bindings if this is called more than once
        if (btn.dataset.faqBound === 'true') return
        btn.dataset.faqBound = 'true'

        btn.setAttribute('role', 'button')
        btn.setAttribute('tabindex', '0')
        btn.setAttribute('aria-expanded','false')
        const panel = btn.nextElementSibling
        if (panel) {
            panel.style.overflow = 'hidden'
            panel.style.transition = 'max-height 0.35s ease, padding 0.35s ease'
            panel.style.maxHeight = '0px'
            panel.setAttribute('aria-hidden','true')
        }
        btn.addEventListener('click', () => toggleFaq(btn))
        btn.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFaq(btn) } })
    })
}
// Initialize on DOM ready only
document.addEventListener('DOMContentLoaded', initFaqAccordions)

function toggleFaq(btn){
    const allFaqs = document.querySelectorAll('.faq')
    const item = btn.closest('.faq')
    const content = btn.nextElementSibling
    const icon = btn.querySelector('.bi-plus')
    const isOpen = item.classList.contains('open')

    // Close all others for single-open behavior
    allFaqs.forEach(f => {
        if (f !== item && f.classList.contains('open')) {
            f.classList.remove('open')
            const hdr = f.querySelector('.faq-accordion')
            const panel = hdr && hdr.nextElementSibling
            if (hdr) hdr.setAttribute('aria-expanded','false')
            if (panel) {
                panel.style.maxHeight = '0px'
                panel.style.padding = '0px 16px'
                panel.setAttribute('aria-hidden','true')
            }
            const ic = f.querySelector('.faq-accordion .bi-plus')
            if (ic) ic.style.transform = 'rotate(0deg)'
        }
    })

    if (isOpen) {
        item.classList.remove('open')
        btn.setAttribute('aria-expanded','false')
        content.style.maxHeight = '0px'
        content.style.padding = '0px 16px'
        content.setAttribute('aria-hidden','true')
        if (icon) icon.style.transform = 'rotate(0deg)'
    } else {
        item.classList.add('open')
        btn.setAttribute('aria-expanded','true')
        // Measure full height directly to avoid font/load timing issues
        content.style.padding = '16px'
        const full = content.scrollHeight || content.getBoundingClientRect().height
        content.style.maxHeight = full + 'px'
        content.setAttribute('aria-hidden','false')
        if (icon) icon.style.transform = 'rotate(45deg)'
    }
}



// ------------- reveal section animations ---------------

if (window.gsap && window.ScrollTrigger) {
    const sections = gsap.utils.toArray("section")
    sections.forEach((sec) => {
        const revealUptimeline = gsap.timeline({paused: true, scrollTrigger: { trigger: sec, start: "10% 80%", end: "20% 90%" }})
        revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
            opacity: 1,
            duration: 0.8,
            y: "0%",
            stagger: 0.2,
        })
    })
}

// -------------- reveal section animations end ---------------

//animate cards on scroll
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.value-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    cards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(card);
    });
  
    // Parallax effect for banner
    window.addEventListener('scroll', () => {
      const banner = document.querySelector('.mission-banner');
      const scrolled = window.pageYOffset;
      banner.style.transform = `translateY(${scrolled * 0.2}px)`;
    });
  });

// Horizontal scroll for video reel (guarded). Not used on the new homepage but kept safe.
const videoContainer2 = document.querySelector('.video-container');
if (videoContainer2) {
  let isDown = false;
  let startX;
  let scrollLeft;
  videoContainer2.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - videoContainer2.offsetLeft;
      scrollLeft = videoContainer2.scrollLeft;
  });
  videoContainer2.addEventListener('mouseleave', () => { isDown = false; });
  videoContainer2.addEventListener('mouseup', () => { isDown = false; });
  videoContainer2.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - videoContainer2.offsetLeft;
      const walk = (x - startX) * 2;
      videoContainer2.scrollLeft = scrollLeft - walk;
  });
}



