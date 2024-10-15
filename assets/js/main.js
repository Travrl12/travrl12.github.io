// Immediately apply dark mode based on system preference or localStorage before page load
if (localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode'); // Apply to body
}

window.onload = function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const introText = document.getElementById('intro-text');

    // Load dark mode preference from localStorage, default to dark mode
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled || localStorage.getItem('darkMode') === null) {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark