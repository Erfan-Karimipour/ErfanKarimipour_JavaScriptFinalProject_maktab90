export function paymentOpen(){
    const continueToPayment = document.querySelector(`.continue`);
    continueToPayment.addEventListener(`click`, () => {
        document.querySelector(`.paymentMethods`).classList.toggle(`left-100`);
        document.querySelector(`.home`).classList.toggle(`hidden`);
    });
}