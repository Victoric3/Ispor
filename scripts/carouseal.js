// Horizontal scroll for ambassadors carousel
const carousel = document.querySelector('.ambassadors-carousel');
let isDragging = false;
let startXCaroseal;
let scrollLeftCaroseal;

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startXCaroseal = e.pageX - carousel.offsetLeft;
    scrollLeftCaroseal = carousel.scrollLeft;
});

carousel.addEventListener('mouseup', () => {
    isDragging = false;
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startXCaroseal) * 2;
    carousel.scrollLeft = scrollLeft - walk;
});

// Touch support for mobile
carousel.addEventListener('touchstart', (e) => {
    isDragging = true;
    startXCaroseal = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchend', () => {
    isDragging = false;
});

carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startXCaroseal) * 2;
    carousel.scrollLeft = scrollLeft - walk;
});

document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mousemove', (e) => {
        const rect = member.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        member.style.setProperty('--mouse-x', `${x}px`);
        member.style.setProperty('--mouse-y', `${y}px`);
    });
});