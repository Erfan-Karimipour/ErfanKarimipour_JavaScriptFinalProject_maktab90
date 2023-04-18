export function promoCodeAdder() { 
    const promoCodeBtn = document.querySelector(`.promoCodeBtn`);

promoCodeBtn.addEventListener(`click`, () => {

    let promoCode = document.querySelector(`.promoCode`).value;
    const shouldPay = document.querySelector(`.shouldPay`);
    let off = document.querySelector(`.off`);
    let howMuchOff = document.querySelector(`.howMuchOff`);
    let promoBox = document.querySelector(`.promoBox`);
    switch (promoCode){
   
        case `Golden`: 
            off.innerHTML = Math.trunc(( shouldPay.innerHTML/100)*30 );
            shouldPay.innerHTML = Math.trunc(shouldPay.innerHTML -  (shouldPay.innerHTML/100)*30 ) ;
            off.parentElement.parentElement.classList.remove(`hidden`);
            howMuchOff.innerHTML = 30;
            promoBox.classList.add(`hidden`);
            howMuchOff.parentElement.classList.remove(`hidden`);
            break;
        case `Silver`: 
            off.innerHTML = Math.trunc(( shouldPay.innerHTML/100)*20 );
            shouldPay.innerHTML = Math.trunc(shouldPay.innerHTML -  (shouldPay.innerHTML/100)*20 ) ;
            off.parentElement.parentElement.classList.remove(`hidden`);
            howMuchOff.innerHTML = 20;
            promoBox.classList.add(`hidden`);
            howMuchOff.parentElement.classList.remove(`hidden`);
            break;
        case `Bronze`: 
            off.innerHTML = Math.trunc(( shouldPay.innerHTML/100)*10 );
            shouldPay.innerHTML = Math.trunc(shouldPay.innerHTML -  (shouldPay.innerHTML/100)*10 ) ;
            off.parentElement.parentElement.classList.remove(`hidden`);
            howMuchOff.innerHTML = 10;
            promoBox.classList.add(`hidden`);
            howMuchOff.parentElement.classList.remove(`hidden`);
            break;
        case `Shit`: 
            off.innerHTML = shouldPay.innerHTML;
            shouldPay.innerHTML = shouldPay.innerHTML * 2 ;
            off.parentElement.parentElement.classList.remove(`hidden`);
            howMuchOff.innerHTML = -100;
            promoBox.classList.add(`hidden`);
            howMuchOff.parentElement.classList.remove(`hidden`);
            break;
    }
});
}