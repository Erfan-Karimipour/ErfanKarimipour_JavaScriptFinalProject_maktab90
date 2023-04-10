export function searchBar(){
    let debouncer;
    const search = document.querySelector(`.search`);
    const searchBar = document.querySelector(`.searchBar`);
    search.addEventListener(`input`, () => {
        clearTimeout(debouncer);
            debouncer = setTimeout(() => {
                searchBar.innerHTML = ``;
                if(search.value.length > 1){
                    axios.get(`http://localhost:3000/Shoes`,{
                    }).then(res => { 
                        res = res.data;
                        res.forEach(element => {
                            if (element.title.includes(search.value)){
                                let p = document.createElement(`p`);
                                p.className = `border-2 pl-2 cursor-pointer hover:bg-gray-200`
                                p.innerHTML = element.title;
                                searchBar.append(p);
                                searchBar.classList.remove(`hidden`);
                            }
                        });
                    });
                }
            }, 500);
        if (searchBar.childNodes.length<3){
            searchBar.classList.add(`hidden`);
        }
    })
    searchBar.addEventListener(`click`, (event) => {
        search.value = event.target.innerHTML;
    })
}