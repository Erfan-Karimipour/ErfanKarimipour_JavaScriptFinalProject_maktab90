export function removePromo(){
    const removePromo = document.querySelector(`.removePromo`);
removePromo.addEventListener(`click`, () => {

    let howMuchOff = document.querySelector(`.howMuchOff`);
    let promoBox = document.querySelector(`.promoBox`);

    document.querySelector(`.shouldPay`).innerHTML = document.querySelector(`.amount`).innerHTML - (-document.querySelector(`.price`).innerHTML);
    promoBox.classList.remove(`hidden`);
    howMuchOff.parentElement.classList.add(`hidden`);
    document.querySelector(`.off`).parentElement.parentElement.classList.add(`hidden`);
    document.querySelector(`.promoCode`).value = ``;
})
}