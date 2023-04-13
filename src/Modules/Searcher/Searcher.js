export function searcher(){
    const search = document.querySelector(`.search`);
    search.addEventListener(`keydown`, (event) => {
        if(event.keyCode==13){
            document.querySelector(`.ShoeList`).innerHTML=``;
            event.preventDefault()
            axios.get(`http://localhost:3000/Shoes`,{
            }).then(res => { 
                res = res.data;
                if (document.querySelector(`.searchHistory`)){
                    document.querySelector(`.searchHistory`).classList.add(`hidden`)
                }
                res.forEach(element => {
                    if (element.title.includes(search.value)){
                        let div = document.createElement(`div`);
                        div.className = `w-full overflow-hidden text-ellipsis`;
                        div.innerHTML = `
                        <img src=${element.images} alt="Shoe" class="p-4 bg-gray-200 rounded-2xl mb-2 w-shoeImg w-full">
                        <span class="text-xl font-bold mb-2 whitespace-nowrap">${element.title}</span>
                        <p class="font-bold">$ ${element.price}</p>
                        `;
                        document.querySelector(`.ShoeList`).append(div);
                    }
                });
                let history = JSON.parse(localStorage.getItem(`History`));
                if (!history) history = [];
                history.push(search.value);
                localStorage.setItem(`History`, JSON.stringify(history));
            });
        }
    })
}