import { mostPopularLister } from "../../Modules/MostPopularLister/MostPopularLister.js";

mostPopularLister();

const filterBtns = document.querySelector(`.filterBtns`);
filterBtns.addEventListener(`click`, (event) => {
    if(event.target.classList.contains(`filterBtn`)){
        document.querySelector(`.selectedFilter`).classList.remove(`selectedFilter`);
        event.target.classList.add(`selectedFilter`);
    };
    const FilteredShoeList = document.querySelector(`.FilteredShoeList`);
    FilteredShoeList.innerHTML=``;
    let clickedBtn = event.target.innerHTML;
    let filt = `http://localhost:3000/Shoes?CompanyName=${clickedBtn}`
    if (clickedBtn == `All`){
        filt = `http://localhost:3000/Shoes`
    }
    axios.get(filt).then(res => { 
        res = res.data;
        res.forEach(element => {
            if(element.mostPopular==true){
                let div = document.createElement(`div`);
                div.setAttribute(`onclick`, `productOnClick(event)`);
                div.setAttribute(`id`, element.id);       
                div.className = `w-full overflow-hidden text-ellipsis`;
                div.innerHTML = `
                <img src=${element.images} alt="Shoe" class="p-4 bg-gray-200 rounded-2xl mb-2 w-shoeImg w-full">
                <span class="text-xl font-bold mb-2 whitespace-nowrap">${element.title}</span>
                <p class="font-bold">$ ${element.price}</p>
                `;
                FilteredShoeList.append(div);
            }
        });
    });
    }
)   