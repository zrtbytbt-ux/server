document.addEventListener('DOMContentLoaded', () => {
    // Splash Screen & Typing Logic
    const splash = document.getElementById('splash');
    const typingText = document.getElementById('typing-text');
    const welcomeContent = document.getElementById('welcome-content');
    const particlesContainer = document.getElementById('particles');

    if (splash) {
        // 1. Typing Effect
        const text = "أبو محمد يرحب بكم في";
        let charIndex = 0;

        function type() {
            if (charIndex < text.length) {
                typingText.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 80);
            }
        }

        setTimeout(type, 1000); // Start typing after 1s

        // 2. Generate Floating Particles
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 4 + 2 + 'px';
            particle.style.width = size;
            particle.style.height = size;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = Math.random() * 3 + 4 + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.background = Math.random() > 0.5 ? 'var(--secondary-color)' : '#fff';
            particlesContainer.appendChild(particle);
        }

        // 3. 3D Tilt Effect
        splash.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xRotation = (clientY / innerHeight - 0.5) * 20;
            const yRotation = (clientX / innerWidth - 0.5) * -20;
            welcomeContent.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });

        // 4. Hide Splash
        setTimeout(() => {
            splash.classList.add('hidden');
        }, 6000); // 6 seconds to show all effects
    }

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Button click effect
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            console.log('Download started...');
            // Add a ripple effect or similar if desired
        });
    }
});
