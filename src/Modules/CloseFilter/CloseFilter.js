export function closeFilter(){
    const closeFilter = document.querySelector(`.closeFilter`);
    const filterPage = document.querySelector(`.FilterPage`);
    closeFilter.addEventListener(`click`, () => {
        filterPage.style.top = `-100%`
    })
}