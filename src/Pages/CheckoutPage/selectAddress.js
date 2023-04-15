function selectAddress(event){
    document.querySelector(`.selectedAddress`).classList.remove(`selectedAddress`);
    event.target.classList.add(`selectedAddress`);
}