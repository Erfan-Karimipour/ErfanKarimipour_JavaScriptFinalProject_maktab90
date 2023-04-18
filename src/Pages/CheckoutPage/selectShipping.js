function selectShipping(event){
    document.querySelector(`.selectShipping`).classList.remove(`selectShipping`);
    event.target.classList.add(`selectShipping`);
}