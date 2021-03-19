let button = document.getElementById('menu_button');
let close_nav_button = document.getElementById('close_nav_button');
let filter_button = document.getElementById('filter_button');
let filter_button_close = document.getElementById('filter_button_close');

button.addEventListener('click', function () {
  navigation.classList.toggle('header__nav_display-block');
  nav_overlay.classList.toggle("header__nav-overlay_block");
});

close_nav_button.addEventListener('click', function () {
  navigation.classList.toggle('header__nav_display-block');
  nav_overlay.classList.toggle("header__nav-overlay_block")
});


filter_button.addEventListener('click', function () {
filter_menu.classList.toggle('catalog__display_block');
});

filter_button_close.addEventListener('click', function () {
filter_menu.classList.toggle('catalog__display_block');
});