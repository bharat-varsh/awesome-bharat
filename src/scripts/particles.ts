/**
 * Floating accent particles for page atmosphere.
 * Adapted from only-reference/assets/js/app.js createParticles().
 */
function createParticles() {
    const container = document.getElementById('bg-particles');
    if (!container) return;

    container.replaceChildren();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    for (let index = 0; index < 12; index += 1) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${6 + Math.random() * 6}s`;
        const size = `${1.5 + Math.random() * 2}px`;
        particle.style.width = size;
        particle.style.height = size;
        container.appendChild(particle);
    }
}

createParticles();
