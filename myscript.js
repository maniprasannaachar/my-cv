// Dark mode toggle switch
const darkModeSwitch = document.getElementById('dark-mode-switch');
const modeLabel = document.getElementById('mode-label');

darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    modeLabel.textContent = darkModeSwitch.checked ? 'Dark Mode' : 'Light Mode';
});

// Collapsible sections
const sections = document.querySelectorAll('.collapsible-section');
sections.forEach(section => {
    const toggleButton = section.querySelector('.toggle-button');
    toggleButton.addEventListener('click', () => {
        section.classList.toggle('active');
        toggleButton.textContent = section.classList.contains('active') ? '[-]' : '[+]';
    });
});
