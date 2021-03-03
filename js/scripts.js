let button = document.getElementById('menu_button');
let navigation = document.getElementById('navigation');
let close_nav_button = document.getElementById('close_nav_button');

button.addEventListener('click', function () {
  navigation.classList.toggle('header__navigation_display_block');
});

close_nav_button.addEventListener('click', function () {
  navigation.classList.toggle('header__navigation_display_block');
});