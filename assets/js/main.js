// Immediately apply dark mode based on system preference or localStorage before page load
if (localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark-mode');  // Apply to entire document
}

window.onload = function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const introText = document.getElementById('intro-text');

    // Load dark mode preference from localStorage, default to dark mode
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled || localStorage.getItem('darkMode') === null) {
        document.documentElement.classList.add('dark-mode');  // Apply to entire document
        introText.style.color = '#00FF41';  // Neon green for dark mode
    } else {
        introText.style.color = '#FF3131';  // Red for light mode
    }

    // Dark mode toggle button functionality
    darkModeToggle.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark-mode');  // Toggle globally
        const darkModeStatus = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('darkMode', darkModeStatus);

        // Update Typed.js text color dynamically
        if (darkModeStatus) {
            introText.style.color = '#00FF41';  // Neon green for dark mode
        } else {
            introText.style.color = '#FF3131';  // Red for light mode
        }
    });

    // Initialize Typed.js with updated text
    const typed = new Typed('#intro-text', {
        strings: [
            "Hi, I'm Travis R. Lee...",
            "Passionate About Ethical Hacking",
            "Challenging Myself with Offensive Security Projects"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        onStart: function () {
            introText.style.visibility = 'visible'; // Ensure text is visible when Typed.js starts
        },
        preStringTyped: function () {
            // Update color dynamically for Typed.js
            if (document.documentElement.classList.contains('dark-mode')) {
                introText.style.color = '#00FF41';  // Neon green for dark mode
            } else {
                introText.style.color = '#FF3131';  // Red for light mode
            }
        }
    });
};