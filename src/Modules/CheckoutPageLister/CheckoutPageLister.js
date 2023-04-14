export function checkoutPageLister(){
    const cartsDiv = document.querySelector(`.carts`);
    let totalPrice = 0;

    let carts = JSON.parse(localStorage.getItem(`Carts`));
    carts.forEach(element => {
        let div = document.createElement(`div`);
        div.className = "flex justify-evenly rounded-3xl bg-white w-fit p-3 mx-5 mb-5 shadow-sm shadow-gray-200";
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
                <div class="font-extrabold bg-gray-100 rounded-full p-4 py-2">
                    <span class="quantity">${element.quantity}</span>
                </div>
            </div>
        </div>
        `
        cartsDiv.append(div);
        totalPrice += element.price * element.quantity;
    });
}