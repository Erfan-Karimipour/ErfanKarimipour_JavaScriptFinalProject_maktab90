export function cartsChecker(){
    const cartsIcon = document.querySelector(`.cartsIcon`);
cartsIcon.addEventListener(`click`, () => {
    let carts = JSON.parse(localStorage.getItem(`Carts`))
    if ( carts != null && carts.length != 0) {
        window.open(`../CartsPage/Index.html`, `_self`);
    } else {
        document.querySelector(`.cartAlert`).style.left = "-2%"
        setTimeout(() => {
            document.querySelector(`.cartAlert`).style.left = "-100%"
        }, 2000)
    }
})
}