let button = document.getElementById('menu_button');
let close_nav_button = document.getElementById('close_nav_button');

button.addEventListener('click', function () {
  navigation.classList.toggle('header__navigation_display_block');
  nav_overlay.classList.toggle("header__nav-overlay_block");
});

close_nav_button.addEventListener('click', function () {
  navigation.classList.toggle('header__navigation_display_block');
  nav_overlay.classList.toggle("header__nav-overlay_block")
});