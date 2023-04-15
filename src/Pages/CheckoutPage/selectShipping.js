function selectShipping(event){
    console.log(`dd`);
    document.querySelector(`.selectShipping`).classList.remove(`selectShipping`);
    event.target.classList.add(`selectShipping`);
}