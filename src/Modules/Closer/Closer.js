export function closer() {
    let searchBar = document.querySelector(`.searchBar`);
    document.querySelector(`body`).addEventListener(`click`, (event) => {
        if(event.target != searchBar){
            searchBar.classList.add(`hidden`);
        }
    })
}