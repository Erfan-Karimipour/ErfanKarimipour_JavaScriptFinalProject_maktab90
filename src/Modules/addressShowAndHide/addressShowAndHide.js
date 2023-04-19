export function addressShowAndHide(){

    const shippingAddress = document.querySelector(`.shippingAddress`);
shippingAddress.addEventListener(`click`, () => {
    document.querySelector(`.addressChoose`).style.left = 0;
    setTimeout(() => {
        document.querySelector(`.home`).classList.toggle(`hidden`);
    },200);
})

document.querySelector(`.addressChoose`).addEventListener(`click`, (event) => {
    if(event.target.parentElement.classList.contains(`addressBack`)){
    document.querySelector(`.home`).classList.toggle(`hidden`);
    document.querySelector(`.addressChoose`).style.left = "-150%";
}
})
}