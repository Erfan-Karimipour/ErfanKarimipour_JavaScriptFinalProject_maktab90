export function removeCartOptions(){
    const cancel = document.querySelector(`.cancel`);
const yesRemove = document.querySelector(`.yesRemove`);

cancel.addEventListener(`click`, () => {
    document.querySelector(`.removing`).classList.add(`hidden`);
    document.querySelector(`.removingCarts`).innerHTML = ``;
})
yesRemove.addEventListener(`click`, (event) => {
    let products = JSON.parse(localStorage.getItem(`Carts`));

    let productName = event.target.parentElement.parentElement.querySelector(`.productName`).innerHTML;
    let productColor = event.target.parentElement.parentElement.querySelector(`.productColor`).innerHTML;
    let productSize = event.target.parentElement.parentElement.querySelector(`.productSize`).innerHTML.replace(`&nbsp;`, ``);

    products.forEach(element => {
        if(element.name == productName && element.color == productColor && element.size == productSize){
            let index =products.indexOf(element, 0);
            products.splice(index, 1);
            localStorage.setItem(`Carts`, JSON.stringify(products));
        }
        location.reload();
    });
})
}