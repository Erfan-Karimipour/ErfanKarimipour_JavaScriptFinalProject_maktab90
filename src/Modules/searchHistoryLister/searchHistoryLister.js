export function searchHistoryLister(){
    const searchHistory = document.querySelector(`.searchHistory`);
    let history = JSON.parse(localStorage.getItem(`History`));
    if (!history) history = [];
    history.forEach(element => {
        let div = document.createElement(`div`);
        div.className = `flex justify-between text-gray-500 px-2 py-1 my-3 rounded-xl hover:bg-gray-100`;
        div.innerHTML = `
        <button class="text-lg oldSearch">${element}</button>
        <ion-icon name="close-outline" class="p-1 border-2 border-gray-500 rounded-xl remove"></ion-icon>`
        searchHistory.append(div);
    });
    searchHistory.addEventListener(`click`, (event) => {

        if(event.target.classList.contains(`remove`)){

            let history = JSON.parse(localStorage.getItem(`History`));
            history.forEach(element => {
                if(element == event.target.parentElement.querySelector(`.oldSearch`).innerHTML){
                    console.log(`jj`);  
                    let index = history.indexOf(element, 0);
                    history.splice(index, 1);
                    localStorage.setItem(`History`, JSON.stringify(history));
                    location.reload();
                }
            });
            
        }
    })
}