export function orderPageLister(){
    const activeNav = document.querySelector(`.activeNav`);
const completedNav = document.querySelector(`.completedNav`);

let user = JSON.parse(localStorage.getItem(`Accounts`))[0].Email;
axios.get(`http://localhost:3000/Accounts?Email=${user}`).then(res => {
    res = res.data[0].Orders;

    res.forEach(order => {

        let container = document.createElement(`div`);
        container.className = `border-b-2 mb-4 border-gray-300`;
        order.data.forEach(element => {
            let div = document.createElement(`div`);
            div.className = "flex justify-evenly rounded-3xl bg-white h-fit w-fit p-3 mx-5 mb-5 shadow-sm shadow-gray-200";
            div.innerHTML = `
            <div class="flex justify-evenly">
            </div>
            <div class="bg-gray-200 w-32 h-32 p-2 rounded-2xl">
                <img src="${element.img}" alt="Shoe">
            </div>
            <div class="mt-2 ml-2">
                <div class="flex overflow-hidden text-lg font-bold">
                    <span class="w-44 mr-2 overflow-hidden text-ellipsis whitespace-nowrap productName">${element.name}</span>
                </div>
                <div class="flex text-msm my-1">
                    <p class="w-4 h-4 ${element.color} rounded-full mr-1 border-2"></p> <span class="productColor">${element.color}</span> <p class="mx-2 text-gray-500">|</p> Size <span class="productSize">&nbsp=&nbsp${element.size}</span> <p class="mx-2 text-gray-500">|</p>Qty <span>&nbsp=&nbsp${element.quantity}</span>
                </div>
                <p class="bg-gray-200 rounded-md py-1 px-2 w-fit text-msm font-bold">${order.status}</p>
                <div class="flex justify-between">
                    <p class="font-bold mt-2">$${element.price}</p>
                    <button class="text-sm text-white bg-black rounded-full p-2 px-3">
                        Track Order
                    </button>
                </div>
            </div>
            `
            container.append(div);
        });
        if (order.status == `In Delivery`){
            activeNav.append(container);
            document.querySelector(`.activenotFound`).classList.add(`hidden`);
        } else {
            completedNav.append(container);
            document.querySelector(`.completednotFound`).classList.add(`hidden`);
        }


    });
});
}