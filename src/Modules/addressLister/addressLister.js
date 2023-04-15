export function addressLister(){
    let user = JSON.parse(localStorage.getItem(`Accounts`))[0].Email;
    axios.get(`http://localhost:3000/Accounts?Email=${user}`).then(res => {
    const shippingAddresses = document.querySelector(`.shippingAddresses`);
    res = res.data[0].Addresses;
    res.forEach(address => {
        let div = document.createElement(`div`);
        div.className = `flex p-4 mt-2 mb-3 bg-white rounded-xl shippingAddress`;
        div.innerHTML = `
        <ion-icon name="location" class="text-3xl bg-black text-white p-2 rounded-full"></ion-icon>
        <div class="flex justify-between w-10/12">
            <div class="ml-4 mt-1">
                <p class="font-extrabold text-md">${address.name}</p>
                <p class="text-gray-600 text-sm">${address.address}</p>
            </div>
            <input type="radio" name="AddressCart" class="w-5 h-5 mt-3 border-2 border-black selectedAddress" onclick="selectAddress(event)">
        </div>
        `
        shippingAddresses.append(div);
    });
})
}