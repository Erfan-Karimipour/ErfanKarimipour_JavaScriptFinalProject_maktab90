export function cartsLister(){
    const cartNav = document.querySelector(`.cartNav`);
let totalPrice = 0;

let carts = JSON.parse(localStorage.getItem(`Carts`));
carts.forEach(element => {
    let div = document.createElement(`div`);
    div.className = "flex justify-evenly rounded-3xl bg-white h-fit w-fit p-3 mx-5 mb-5 shadow-sm shadow-gray-200";
    div.innerHTML = `
    <div class="flex justify-evenly">
    </div>
    <div class="bg-gray-200 w-28 h-28 p-2 rounded-2xl">
        <img src="${element.img}" alt="Shoe">
    </div>
    <div class="mt-2 ml-2">
        <div class="flex overflow-hidden text-xl font-bold">
            <span class="w-44 mr-2 overflow-hidden text-ellipsis whitespace-nowrap productName">${element.name}</span>
            <button class="mt-1"><ion-icon name="trash-outline" ></ion-icon></button>
        </div>
        <div class="flex text-sm my-2">
            <p class="w-4 h-4 ${element.color} rounded-full mr-1 border-2"></p> <span class="productColor">${element.color}</span> <p class="mx-2 text-gray-500">|</p>Size = <span class="productSize">&nbsp${element.size}</span>
        </div>
        <div class="flex justify-between">
            <p class="font-bold mt-2">$${element.price}</p>
            <div class="grid grid-cols-3 gap-4 font-extrabold bg-gray-100 rounded-full p-2 px-5">
                <button class="remove" onclick="remove(event)">-</button>
                <span class="quantity">${element.quantity}</span>
                <button class="add" onclick="add(event)">+</button>
            </div>
        </div>
    </div>
    `
    cartNav.append(div);
    totalPrice += element.price * element.quantity;
});
localStorage.setItem(`TotalPrice`, JSON.stringify(totalPrice))
document.querySelector(`.totalPrice`).innerHTML = "$" + totalPrice + ".00";
}