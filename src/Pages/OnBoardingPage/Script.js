import {checkOnBoardingPageWatched} from '../../Modules/checkOnBoardingPageWatched/OnBoardingPageWatched.js'

const loadingPage = document.querySelector(`.LoadingPage`);
const boarding2 = document.querySelector(`.boarding2`);
const boarding3 = document.querySelector(`.boarding3`);
const nextBtn = document.querySelector(`.swiper-button-nextt`);

checkOnBoardingPageWatched();

setTimeout(()=>{
    loadingPage.style.opacity = `0%`;
    boarding2.style.opacity = `100%`;
}, 1000)

setTimeout(()=>{
  loadingPage.classList.add(`hidden`);
  boarding2.classList.add(`hidden`);
  boarding3.classList.remove(`hidden`);
}, 4000)

const swiper = new Swiper('.swiper', {

    pagination: {
      el: '.swiper-paginationn',
      clickable: true,
      type: 'bullets',
    },

    navigation: {
      nextEl: '.swiper-button-nextt',
      disabledClass: `notHappening`,
    },

});

function jesus (){
  console.log(`jesusc`);
  if (nextBtn.innerHTML==`Get Started!`) {
    localStorage.setItem(`OnBoardingPageWatched`, JSON.stringify(true));
    window.open(`../RegisterPage/Index.html`, `_self`);
  }
}

swiper.on(`slideChange`, () => {
  if(nextBtn.classList.contains(`notHappening`)){
    nextBtn.removeAttribute (`disabled`);
    nextBtn.innerHTML = `Get Started!`;

    nextBtn.addEventListener(`click`, jesus)
  } else {
    nextBtn.removeEventListener(`click`, jesus)
    nextBtn.classList.remove(`notHappening`)
    nextBtn.innerHTML = `Next`;
  }
})

