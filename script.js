var showBtn = document.querySelector('.link-btn');
var brandContainer = document.querySelector('.brand__container');
var brandItem = brandContainer.querySelectorAll('.brand__item');

function toggleBtn (item) {
  showBtn.addEventListener('click', function () {
    item.classList.toggle('hidden');
    if (item.classList[1] === 'hidden') {
      showBtn.textContent = 'Показать всё';
      showBtn.classList.remove('link-btn-revert');
    } else {
      showBtn.textContent = 'Скрыть';
      showBtn.classList.add('link-btn-revert');
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
  if (window.innerWidth <= 768) {
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