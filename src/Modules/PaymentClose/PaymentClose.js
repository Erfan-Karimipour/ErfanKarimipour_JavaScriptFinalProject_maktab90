export function paymentClose() { 
    const paymentBack = document.querySelector(`.paymentBack`);
paymentBack.addEventListener(`click`, () => {
    document.querySelector(`.paymentMethods`).classList.toggle(`left-100`);
    document.querySelector(`.home`).classList.toggle(`hidden`);
});
 }