document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    var navPopup = document.getElementById('nav-popup');

    // Toggle the menu visibility
    if (window.innerWidth >= 600) {
        document.body.classList.toggle('menu-open');
    } else {
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    }

    // Toggle the nav-popup visibility and collapsed class
    navPopup.style.display = (navPopup.style.display === 'none' || navPopup.style.display === '') ? 'block' : 'none';
    menu.classList.toggle('collapsed');
});

// Close the navigation menu when clicking outside of it
document.addEventListener('click', function (event) {
    var menu = document.getElementById('menu');
    var navPopup = document.getElementById('nav-popup');
    var menuToggle = document.getElementById('menu-toggle');

    if (!menu.contains(event.target) && event.target !== menuToggle) {
        document.body.classList.remove('menu-open');
        menu.style.display = 'none';
        navPopup.style.display = 'none';
        menu.classList.remove('collapsed');
    }
});

// Close the navigation menu when scrolling the page
document.addEventListener('scroll', function () {
    var menu = document.getElementById('menu');
    var navPopup = document.getElementById('nav-popup');

    document.body.classList.remove('menu-open');
    menu.style.display = 'none';
    navPopup.style.display = 'none';
    menu.classList.remove('collapsed');
});



