export function addNewAddressToDB(){
    const addAddress = document.querySelector(`.addAddress`);
addAddress.addEventListener(`click`, (event) => {
    event.preventDefault();
    let newAddress = {
        name    : addAddress.parentElement.querySelector(`input`).value,
        address : addAddress.parentElement.querySelector(`textarea`).value
    }

    let user = JSON.parse(localStorage.getItem(`Accounts`))[0].Email;

    axios.get(`http://localhost:3000/Accounts?Email=${user}`).then(res => {
        res.data[0].Addresses.push(newAddress);
        let id = res.data[0].id;
        res = res.data[0];
        axios.put(`http://localhost:3000/Accounts/${id}`, res);
    });
})
}