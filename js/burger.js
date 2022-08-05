// $(document).ready(function () {
//     $('.header-burger').click(function (event) {
//         $('.header-burger').toggleClass('active');
//     });
// });

// const burger = document.querySelector('.header-burger')
// burger.addEventListener('click', () => {
//   const includes = burger.getAttribute('class').includes('active')
//   if (includes) {
//     burger.classList.remove('active')
//   }
//   else {
//     burger.classList.add('active')
//   }
// })

const burger = document.querySelector('.header-burger')
if (burger){
  const itemBurger = document.querySelector('.header-burger__item');
  const menuBurger = document.querySelector('.header__menu');
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle('lock')
    burger.classList.toggle('active');
    itemBurger.classList.toggle('active');
    menuBurger.classList.toggle('active');
  })
}