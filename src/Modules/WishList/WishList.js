export function wishList(){
    const filterBtns = document.querySelector(`.filterBtns`);
let wishes = JSON.parse(localStorage.getItem(`Wishes`));
const filteredShoeList = document.querySelector(`.FilteredShoeList`);

filterBtns.addEventListener(`click`, (event) => {
if(event.target.classList.contains(`filterBtn`)){
    document.querySelector(`.selectedFilter`).classList.remove(`selectedFilter`);
    event.target.classList.add(`selectedFilter`);
};

filteredShoeList.innerHTML=``;
let clickedBtn = event.target.innerHTML;
let filt = `http://localhost:3000/Shoes?CompanyName=${clickedBtn}`
if (clickedBtn == `All`){
    filt = `http://localhost:3000/Shoes`
}
axios.get(filt).then(result => { 
    result = result.data;
    result.forEach(elementt => {
        wishes.forEach(wish => {
            if(wish==elementt.id){
                let div = document.createElement(`div`);
                div.setAttribute(`onclick`, `productOnClick(event)`);
                div.setAttribute(`id`, elementt.id);       
                div.className = `w-full overflow-hidden text-ellipsis`;
                div.innerHTML = `
                <img src=${elementt.images} alt="Shoe" class="p-4 bg-gray-200 rounded-2xl mb-2 w-shoeImg w-full">
                <span class="text-xl font-bold mb-2 whitespace-nowrap">${elementt.title}</span>
                <p class="font-bold">$ ${elementt.price}</p>
                `;
                filteredShoeList.append(div);
            }
        });
    });
}
);
}
)  
    wishes.forEach(element => {
        axios.get(`http://localhost:3000/Shoes?id=${element}`,{
        }).then(res => { 
            res = res.data;
            res.forEach(element => {
                let div = document.createElement(`div`);
                div.setAttribute(`onclick`, `productOnClick(event)`);
                div.setAttribute(`id`, element.id);       
                div.className = `w-full overflow-hidden text-ellipsis`;
                div.innerHTML = `
                <img src=${element.images} alt="Shoe" class="p-4 bg-gray-200 rounded-2xl mb-2 w-shoeImg w-full">
                <span class="text-xl font-bold mb-2 whitespace-nowrap">${element.title}</span>
                <p class="font-bold">$ ${element.price}</p>
                `;
                filteredShoeList.append(div);
            });
        });
    });
    
}