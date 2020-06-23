// const modalBtn = document.querySelector('.header-language');
// const modal = document.querySelector('.header_dropdown-language');
// const closeBtn = document.querySelector('.close');


// // Events
// modalBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', outsideClick);

// // Open
// function openModal() {
//    modal.style.display = 'flex';
// }

// // Close

// function closeModal() {
//    modal.style.display = 'none'
// }

// // Close If Outside Click
// function outsideClick(e) {
//    if (e.target == modal) {
//       modal.style.display = 'none';
//    }
// }


// $('header_dropdown-language').click(
//    function () {
//       $(this).addClass('header_dropdown-language-active');
//    },
//    function () {
//       $(this).removeClass('header_dropdown-language-active');
//    }
// );






// hamburger.addEventListener("click", function () {
//    leftMenu.classList.toggle("openMenu");
//    hamburger.classList.toggle("open");
// });

// // * закрытие меню по клику вне меню

// document.addEventListener("click", function (event) {
//    const target = event.target;
//    if (!target.closest(".left-menu")) {
//       leftMenu.classList.remove("openMenu");
//       hamburger.classList.remove("open");
//    }
// });




// $(function(){
//    $('body')
//    .on('click', '.dropdown > a', function(){
//     $(this).parent().toggleClass('active');
//    })
//    .on('mouseenter mouseleave', '.dropdown', function(){
//     $(this).toggleClass('hover');
//    })
//    .on('click', function(e) {
//     $('.dropdown.active:not(.hover)').removeClass('active');
//    });
//  })


Waves.attach('.button', ['waves-button', 'waves-float']);
Waves.init();

var swiper = new Swiper('.swiper-container', {
   effect: 'coverflow',
   loop: true,
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
   },
   pagination: {
      el: '.swiper-pagination',
   },
});