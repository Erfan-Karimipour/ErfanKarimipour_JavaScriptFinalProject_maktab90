export function clearHistory(){
    const searchHistory = document.querySelector(`.searchHistory`);
let history = JSON.parse(localStorage.getItem(`History`));
if (!history) history = [];

const clearAll = document.querySelector(`.clearAll`);
clearAll.addEventListener(`click`, () => {
    history = [];
    localStorage.setItem(`History`, JSON.stringify(history));
    searchHistory.innerHTML = ``;
});
}