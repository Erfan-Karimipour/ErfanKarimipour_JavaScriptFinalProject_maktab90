export function faildSearch(counter){
    if (document.querySelector(`.ShoeList`).childElementCount == 0){
        document.querySelector(`.notFound`).classList.remove(`hidden`);
    } else {
        document.querySelector(`.notFound`).classList.add(`hidden`);
    }
}
