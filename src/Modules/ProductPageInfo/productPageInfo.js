export function productPageInfo(){
    axios.get(`http://localhost:3000/Shoes?id=${JSON.parse(localStorage.getItem(`Viewing`))}`).then((res) => {
    const swiperWrapper = document.querySelector(`.swiper-wrapper`);
    const productName = document.querySelector(`.productName`);
    productName
    res = res.data;
    res = res[0];
    productName.innerHTML = res.title;
    for (let i = 0; i < 3; i++) {
      const element = document.createElement(`img`);
      element.setAttribute(`src`, res.images);
      element.setAttribute(`alt`, res.description);
      element.className = `swiper-slide w-full`;
      swiperWrapper.append(element);
    }
})
}