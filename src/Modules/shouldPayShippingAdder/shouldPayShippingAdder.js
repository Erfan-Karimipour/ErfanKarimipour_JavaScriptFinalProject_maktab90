export function shouldPayShippingAdder(){
    const shouldPay = document.querySelector(`.shouldPay`);
    shouldPay.innerHTML = document.querySelector(`.amount`).innerHTML;
    shouldPay.innerHTML -= -document.querySelector(`.selectShipping`).parentElement.querySelector(`span`).innerHTML;
    
}