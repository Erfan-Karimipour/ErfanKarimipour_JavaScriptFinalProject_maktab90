export function addNewAddress() { 
    const addNewAddress = document.querySelector(`.addNewAddress`);
addNewAddress.addEventListener(`click`, () => {
    addNewAddress.parentElement.querySelector(`div`).classList.toggle(`h-0`);
})
}