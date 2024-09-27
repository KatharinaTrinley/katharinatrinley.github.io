document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('butterfly-cursor');
    const trailContainer = document.getElementById('cursor-trail');
    const trails = [];

    // Create butterfly SVG
    const butterflySvg = `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15 C 30 5, 10 20, 20 40 C 10 60, 30 80, 50 70 C 70 80, 90 60, 80 40 C 90 20, 70 5, 50 15" fill="#ffbf69" stroke="white" stroke-width="2"/>
            <path d="M50 15 C 45 25, 45 35, 50 40 C 55 35, 55 25, 50 15" fill="00132D"/>
            <circle cx="50" cy="40" r="3" fill="00132D"/>
        </svg>
    `;
    cursor.innerHTML = butterflySvg;

    // Cursor movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        createTrail(e.clientX, e.clientY);
    });

    // Optional: Add a subtle animation effect
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Create trail
    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trailContainer.appendChild(trail);
        trails.push(trail);

        if (trails.length > 20) {
            const removedTrail = trails.shift();
            trailContainer.removeChild(removedTrail);
        }

        setTimeout(() => {
            trail.style.opacity = '0';
        }, 50);

        setTimeout(() => {
            trailContainer.removeChild(trail);
            trails.splice(trails.indexOf(trail), 1);
        }, 1000);
    }
});