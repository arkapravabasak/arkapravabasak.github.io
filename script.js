// Get the button and the current theme from local storage
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleButton.textContent = 'Switch to Light Mode';
}

// Add the click event listener
toggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = 'Switch to Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = 'Switch to Light Mode';
    }
});