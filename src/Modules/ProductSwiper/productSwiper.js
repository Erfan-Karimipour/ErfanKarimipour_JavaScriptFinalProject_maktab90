export function productSwiper(){
    const swiperSlide = document.querySelector(`.swiperSlide`);
    const swiper = new Swiper('.swiper', {
    pagination: {
    el: '.swiper-paginationn',
    clickable: true,
    type: 'bullets',
  },
});
}