const showBtn = document.querySelector('.link-btn');
const brandContainer = document.querySelector('.brand__container');
const brandItem = brandContainer.querySelectorAll('.brand__item');


function toggleBtn (item) {
  showBtn.addEventListener('click', function () {
    if (item.classList.contains('hidden')) {
      showBtn.textContent = 'Скрыть';
      showBtn.classList.add('link-btn-revert');
      item.classList.remove('hidden');
    } else {
      showBtn.textContent = 'Показать все'
      showBtn.classList.remove('link-btn-revert')
      item.classList.add('hidden');
    }
  });
}

for (let i = 6; i < brandItem.length; i++) {
  brandItem[i].classList.add('hidden');
  toggleBtn(brandItem[i]);
}

var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);