export function FilterLister () {
    const filteredName = document.querySelector(`.FilteredName`);
    const companys = document.querySelector(`.companys`);
    const filteredShoeList = document.querySelector(`.FilteredShoeList`);
    companys.addEventListener(`click`, (event) => {
        filteredShoeList.innerHTML=``;
        let clickedBtn = event.target.parentElement.querySelector(`p`).innerHTML;
        filteredName.innerHTML = clickedBtn;
        axios.get(`http://localhost:3000/Shoes?CompanyName=${clickedBtn}`,{
        }).then(res => { 
            res = res.data;
            res.forEach(element => {
                let div = document.createElement(`div`);
                div.className = `w-full overflow-hidden text-ellipsis`;
                div.innerHTML = `
                <img src=${element.images} alt="Shoe" class="p-4 bg-gray-200 rounded-2xl mb-2 w-shoeImg w-full">
                <span class="text-xl font-bold mb-2 whitespace-nowrap">${element.title}</span>
                <p class="font-bold">$ ${element.price}</p>
                `;
                filteredShoeList.append(div);
            });
        });
    })
}