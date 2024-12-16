// Generate random stars
const createStarfield = (numStars) => {
    const starfield = document.getElementById('starfield');

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random size, position, and opacity
        const size = Math.random() * 3 + 1; // Star sizes between 1px and 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.opacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1

        // Add star to the starfield
        starfield.appendChild(star);
    }
};

// Call the function to create 200 stars
createStarfield(200);

function togglePanel(panel) {
    const content = panel.querySelector('.story-content');
    if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';

    }

}

function openGallery() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'block';
}

function closeGallery() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

document.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Add the "scrolled" class after scrolling
    } else {
        header.classList.remove('scrolled'); // Remove the "scrolled" class at the top
    }
});