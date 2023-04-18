function selectPayment(event){
    if (document.querySelector(`.selectPayment`)){
        document.querySelector(`.selectPayment`).classList.remove(`selectPayment`);
        event.target.classList.add(`selectPayment`);
    }
    event.target.classList.add(`selectPayment`);
};