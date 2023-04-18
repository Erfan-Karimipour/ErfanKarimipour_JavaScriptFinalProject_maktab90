import { checkoutPageLister } from "../../Modules/CheckoutPageLister/CheckoutPageLister.js";
import { addNewAddress } from "../../Modules/addNewAddress/addNewAddress.js";
import { addNewAddressToDB } from "../../Modules/addNewAddressToDB/addNewAddressToDB.js";
import { addressLister } from "../../Modules/addressLister/addressLister.js";
import { addressShowAndHide } from "../../Modules/addressShowAndHide/addressShowAndHide.js";
import { shippingShowAndHide } from "../../Modules/shippingShowAndHide/shippingShowAndHide.js";
import { dateMaker } from "../../Modules/dateMaker/dateMaker.js";
import { shippingPrice } from "../../Modules/ShippingPrice/ShippingPrice.js";
import { shouldPayShippingAdder } from "../../Modules/shouldPayShippingAdder/shouldPayShippingAdder.js";
import { promoCodeAdder } from "../../Modules/PromoCodeAdder/PromoCodeAdder.js";

checkoutPageLister();
addNewAddress();
addNewAddressToDB();
addressLister();
addressShowAndHide();
shippingShowAndHide();
dateMaker();
shippingPrice();
shouldPayShippingAdder();
promoCodeAdder();

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



// const promoCodeBtn = document.querySelector(`.promoCodeBtn`);
// promoCodeBtn.addEventListener(`click`, () => {
//     let promoCode = document.querySelector(`.promoCode`);
//     switch(promoCode){
//         case `Gold`: 
//     }
// })

