export function shoeLister() {  
    const shoeList = document.querySelector(`.ShoeList`);
    axios.get('http://localhost:3000/Shoes',{
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
            
            shoeList.append(div);
    
        });
    });
}