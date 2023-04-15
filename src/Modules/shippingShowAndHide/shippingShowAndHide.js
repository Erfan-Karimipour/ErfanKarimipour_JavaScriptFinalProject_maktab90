export function shippingShowAndHide(){
    const chooseShipping = document.querySelector(`.chooseShipping`);
chooseShipping.addEventListener(`click`, () => {
    document.querySelector(`.shippingChoose`).style.left = 0;
    setTimeout(() => {
        document.querySelector(`.home`).classList.toggle(`hidden`);
    },200);
})

document.querySelector(`.shippingChoose`).addEventListener(`click`, (event) => {
    if(event.target.parentElement.classList.contains(`shippingBack`)){
    document.querySelector(`.home`).classList.toggle(`hidden`);
    document.querySelector(`.shippingChoose`).style.left = "-100%";
    }
})
}