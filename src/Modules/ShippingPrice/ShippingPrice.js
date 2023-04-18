import { shouldPayShippingAdder } from "../shouldPayShippingAdder/shouldPayShippingAdder.js";
export function shippingPrice(){
    let amount = document.querySelector(`.amount`);
amount.innerHTML = JSON.parse(localStorage.getItem(`TotalPrice`));

const shippings = document.querySelector(`.shippings`);
document.querySelector(`.shippingPrice`).innerHTML = `$` + shippings.querySelector(`.selectShipping`).parentElement.querySelector(`span`).innerHTML + `.00`;
shippings.addEventListener(`click`, (event) => {

    if (event.target.classList.contains(`selectShipping`)){
    console.log(shippings.querySelector(`.selectShipping`).parentElement.querySelector(`span`).innerHTML);
    document.querySelector(`.shippingPrice`).innerHTML = `$` + shippings.querySelector(`.selectShipping`).parentElement.querySelector(`span`).innerHTML + `.00`;
   
    shouldPayShippingAdder();
}
})
}