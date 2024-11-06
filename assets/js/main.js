// Immediately apply light mode by default and adjust if necessary for dark mode preferences
if (localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode');
}

window.onload = function () {
    // Dark mode related code
    const darkModeToggle = document.getElementById('darkModeToggle');
    const introText = document.getElementById('intro-text');
    
    // Load dark mode preference from localStorage
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
        introText.style.color = '#00FF41';  // Neon green for dark mode
    } else {
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
        introText.style.color = '#FF3131';  // Red for light mode
    }

    // Dark mode toggle button functionality
    darkModeToggle.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark-mode');
        document.body.classList.toggle('dark-mode');
        const darkModeStatus = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('darkMode', darkModeStatus);

        // Update Typed.js text color dynamically
        if (darkModeStatus) {
            introText.style.color = '#00FF41';  // Neon green for dark mode
        } else {
            introText.style.color = '#FF3131';  // Red for light mode
        }
    });

    // Initialize Typed.js for the dynamic text
    const typed = new Typed('#intro-text', {
        strings: [
            "Hi, I'm Travis R. Lee...",
            "Passionate About Ethical Hacking",
            "Challenging Myself with Offensive Security Projects"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
};

