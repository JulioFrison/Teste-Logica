// Destaque do menu ao passar o mouse
var menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        this.style.color = '#4CAF50';
    });

    item.addEventListener('mouseout', function() {
        this.style.color = '#ffffff';
    });
});
