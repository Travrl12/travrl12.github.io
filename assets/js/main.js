// Function to apply dark mode styling
function applyDarkMode(darkModeEnabled) {
    document.documentElement.classList.toggle('dark-mode', darkModeEnabled);
    document.body.classList.toggle('dark-mode', darkModeEnabled); // Ensures body also toggles dark mode
    
    const introText = document.getElementById('intro-text');
    if (introText) {
        // Neon green for dark mode, red for light mode
        introText.style.color = darkModeEnabled ? '#00FF41' : '#FF3131';
    }
}

// Initial check for dark mode based on preference or system setting
const isDarkModePreferred = localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);

// Apply dark mode based on stored preference or system setting
applyDarkMode(isDarkModePreferred);

// Function to initialize Typed.js with specific options
function initializeTyped() {
    const introText = document.getElementById('intro-text');
    if (typeof Typed !== 'undefined' && introText) {
        new Typed('#intro-text', {
            strings: [
                "Hi, I'm Travis R. Lee...",
                "Passionate About Ethical Hacking",
                "Challenging Myself with Offensive Security Projects"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: false // Disable blinking cursor
        });
    } else {
        console.warn("Typed.js is not loaded or #intro-text element is missing.");
    }
}

// Function to toggle the hamburger menu visibility
function toggleHamburgerMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active'); // Toggle the 'active' class
}

window.onload = function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const hamburgerButton = document.getElementById('hamburgerMenu');

    // Event listener for dark mode toggle button
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function () {
            const isDarkMode = !document.documentElement.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            applyDarkMode(isDarkMode);
        });
    }

    // Event listener for hamburger menu toggle
    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', toggleHamburgerMenu);
    }

    // Initialize Typed.js for dynamic typing effect
    initializeTyped();
};


