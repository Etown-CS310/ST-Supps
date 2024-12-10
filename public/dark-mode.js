document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('dark-mode');

    // Apply saved preference or system preference
    if (savedDarkMode === 'enabled' || 
        (!savedDarkMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        enableDarkMode();
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('dark-mode', 'enabled');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('dark-mode', null);
    }
});