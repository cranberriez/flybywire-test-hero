const container = document.querySelector('.left-section-bg');

window.addEventListener('scroll', () => {
    const scrollWidth = -30 + (window.scrollY / 10); // adjust the division factor as needed
    const maxScrollWidth = Math.max(0, Math.min(scrollWidth, 60));
    let viewWidth = 40;
    container.style.width = `${viewWidth + maxScrollWidth}vw`;
});