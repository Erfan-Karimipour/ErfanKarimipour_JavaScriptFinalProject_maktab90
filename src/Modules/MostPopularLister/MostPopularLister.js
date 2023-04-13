export function mostPopularLister () {
    const filteredShoeList = document.querySelector(`.FilteredShoeList`);
    axios.get(`http://localhost:3000/Shoes?mostPopular=true`,{
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
}