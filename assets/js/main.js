// Function to apply dark mode styling
function applyDarkMode(darkModeEnabled) {
    document.documentElement.classList.toggle('dark-mode', darkModeEnabled);
    const introText = document.getElementById('intro-text');
    if (introText) {
        introText.style.color = darkModeEnabled ? '#00FF41' : '#FF3131';  // Neon green for dark, red for light
    }
}

// Initial check for dark mode based on preference or system setting
const isDarkModePreferred = localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
applyDarkMode(isDarkModePreferred);

window.onload = function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Event listener for dark mode toggle button
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function () {
            const isDarkMode = document.documentElement.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            applyDarkMode(isDarkMode);
        });
    }

    // Initialize Typed.js if the library is available
    if (typeof Typed !== 'undefined' && document.getElementById('intro-text')) {
        new Typed('#intro-text', {
            strings: [
                "Hi, I'm Travis R. Lee...",
                "Passionate About Ethical Hacking",
                "Challenging Myself with Offensive Security Projects"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    } else {
        console.warn("Typed.js is not loaded or #intro-text element is missing.");
    }
};


