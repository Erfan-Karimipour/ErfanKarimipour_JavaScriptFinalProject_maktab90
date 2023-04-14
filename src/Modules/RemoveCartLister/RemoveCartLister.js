export function removeCartLister(){
    const cartNav = document.querySelector(`.cartNav`);
cartNav.addEventListener(`click`, (event) => {
    if(event.target.getAttribute(`name`) == `trash-outline`){
        let div = document.createElement(`div`);
        div.className = `flex justify-evenly bg-white mx-4 p-4 py-2 rounded-3xl`;
        div.innerHTML = event.target.parentElement.parentElement.parentElement.parentElement.innerHTML;

        document.querySelector(`.removingCarts`).append(div);
        document.querySelector(`.removing`).classList.remove(`hidden`);
    }
});
}