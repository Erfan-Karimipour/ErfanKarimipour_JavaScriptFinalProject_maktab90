export function confirmPayment(){
    const confirmPayment = document.querySelector(`.confirmPayment`);
confirmPayment.addEventListener(`click`, () => {

    if (document.querySelector(`.selectPayment`)){

        document.querySelector(`.orderSuccessful`).classList.remove(`hidden`);

        let order = {
            status : "In Delivery",
            data   : JSON.parse(localStorage.getItem(`Carts`))
        }

        let user = JSON.parse(localStorage.getItem(`Accounts`))[0].Email;

        axios.get(`http://localhost:3000/Accounts?Email=${user}`).then(res => {

            res.data[0].Orders.push(order);
            let id = res.data[0].id;
            res = res.data[0];
            axios.put(`http://localhost:3000/Accounts/${id}`, res);
        }).then(() => {
            localStorage.removeItem(`Carts`);
            window.open(`../HomePage/Index.html`, `_self`);
        });

    } else{
        document.querySelector(`.paymentAlert`).style.left = "-2%";
        setTimeout(() => {
            document.querySelector(`.paymentAlert`).style.left = "-100%";
        }, 2000)
    }
})
}