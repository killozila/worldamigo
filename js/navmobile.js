document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navUl = document.querySelector('nav ul');

  burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('close');
    navUl.classList.toggle('show');
  });
});