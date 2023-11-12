document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    
    if (window.innerWidth <= 600) {
        document.body.classList.toggle('menu-open');
    } else {
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    }
});

