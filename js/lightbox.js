document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});