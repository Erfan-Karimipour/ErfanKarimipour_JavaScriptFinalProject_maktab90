function selectAddress(event){
    document.querySelector(`.selectedAddress`).classList.remove(`selectedAddress`);
    event.target.classList.add(`selectedAddress`);
    document.querySelector(`.addressName`).innerHTML = document.querySelector(`.selectedAddress`).parentElement.parentElement.querySelector(`.Name`).innerHTML;
    document.querySelector(`.addressAddress`).innerHTML = document.querySelector(`.selectedAddress`).parentElement.parentElement.querySelector(`.Address`).innerHTML;
}