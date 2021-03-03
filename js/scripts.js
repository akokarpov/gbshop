let button = document.getElementById('menu_button');
let navigation = document.getElementById('navigation');
let brand_overlay = document.getElementById('brand_overlay');

button.addEventListener('click', function(){ 
  brand_overlay.classList.toggle("brand_overlay")
  navigation.classList.toggle('header__navigation_display_block');
});