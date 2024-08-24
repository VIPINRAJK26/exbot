document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navDropdown = document.getElementById('nav-dropdown');

    hamburger.addEventListener('click', function() {
        navDropdown.style.display = navDropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!navDropdown.contains(event.target) && !hamburger.contains(event.target)) {
            navDropdown.style.display = 'none';
        }
    });
});