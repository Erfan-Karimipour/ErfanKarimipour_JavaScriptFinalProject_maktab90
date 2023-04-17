import { checkoutPageLister } from "../../Modules/CheckoutPageLister/CheckoutPageLister.js";
import { addNewAddress } from "../../Modules/addNewAddress/addNewAddress.js";
import { addNewAddressToDB } from "../../Modules/addNewAddressToDB/addNewAddressToDB.js";
import { addressLister } from "../../Modules/addressLister/addressLister.js";
import { addressShowAndHide } from "../../Modules/addressShowAndHide/addressShowAndHide.js";
import { shippingShowAndHide } from "../../Modules/shippingShowAndHide/shippingShowAndHide.js";
import { dateMaker } from "../../Modules/dateMaker/dateMaker.js";
import { shippingPrice } from "../../Modules/ShippingPrice/ShippingPrice.js";
import { shouldPayShippingAdder } from "../../Modules/shouldPayShippingAdder/shouldPayShippingAdder.js";

checkoutPageLister();
addNewAddress();
addNewAddressToDB();
addressLister();
addressShowAndHide();
shippingShowAndHide();
dateMaker();
shippingPrice();
shouldPayShippingAdder();


const promoCodeBtn = document.querySelector(`.promoCodeBtn`);

promoCodeBtn.addEventListener(`click`, () => {

    let promoCode = document.querySelector(`.promoCode`).value;
    const shouldPay = document.querySelector(`.shouldPay`);
    let off = document.querySelector(`.off`);

    switch (promoCode){
        case `Golden`: 
            shouldPay.innerHTML = Math.trunc( shouldPay.innerHTML - (shouldPay.innerHTML/100)*30 ) ;
            off.innerHTML = Math.trunc(( shouldPay.innerHTML/100)*30 );
            off.parentElement.parentElement.classList.remove(`hidden`);
            break;
        case `Silver`: 
            shouldPay.innerHTML = Math.trunc( shouldPay.innerHTML - (shouldPay.innerHTML/100)*10 ) ;
            off.innerHTML = Math.trunc(( shouldPay.innerHTML/100)*20 );
            off.parentElement.parentElement.classList.remove(`hidden`);
            break;
        case `Bronze`: 
            shouldPay.innerHTML = Math.trunc( shouldPay.innerHTML - (shouldPay.innerHTML/100)*20 ) ;
            off.innerHTML = Math.trunc(( shouldPay.innerHTML/100)*10 );
            off.parentElement.parentElement.classList.remove(`hidden`);
            break;
        case `Shit`: 
            shouldPay.innerHTML = shouldPay.innerHTML * 2 ;
            off.innerHTML = "(-" + shouldPay.innerHTML/2 + ")" ;
            off.parentElement.parentElement.classList.remove(`hidden`);
            break;
    }
})


// const promoCodeBtn = document.querySelector(`.promoCodeBtn`);
// promoCodeBtn.addEventListener(`click`, () => {
//     let promoCode = document.querySelector(`.promoCode`);
//     switch(promoCode){
//         case `Gold`: 
//     }
// })

