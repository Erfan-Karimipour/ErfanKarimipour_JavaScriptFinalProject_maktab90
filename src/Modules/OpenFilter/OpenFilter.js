export function openFilter(){
    const companys = document.querySelector(`.companys`);
    const filterPage = document.querySelector(`.FilterPage`);
    companys.addEventListener(`click`, (event) => {
        if (event.target.parentElement.className == `companyBtn`){
            filterPage.style.top = 0;
        }
    })
}