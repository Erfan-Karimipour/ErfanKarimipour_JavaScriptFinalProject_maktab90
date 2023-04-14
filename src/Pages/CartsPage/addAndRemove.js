function add(event){

    event.target.parentElement.querySelector(`.quantity`).innerHTML -= -1;
    let products = JSON.parse(localStorage.getItem(`Carts`));

    let productName = event.target.parentElement.parentElement.parentElement.querySelector(`.productName`).innerHTML;
    let productColor = event.target.parentElement.parentElement.parentElement.querySelector(`.productColor`).innerHTML;
    let productSize = event.target.parentElement.parentElement.parentElement.querySelector(`.productSize`).innerHTML.replace(`&nbsp;`, ``);

    products.forEach(element => {
        if(element.name == productName && element.color == productColor && element.size == productSize){
            element.quantity += 1;
            event.target.parentElement.querySelector(`.quantity`).innerHTML = element.quantity;
            location.reload();
        }
    });
    localStorage.setItem(`Carts`, JSON.stringify(products));
}

function remove(event){
    if (event.target.parentElement.querySelector(`.quantity`).innerHTML == 1 ){
        removeCart(event);
    }
    if (event.target.parentElement.querySelector(`.quantity`).innerHTML > 1 ){
        let products = JSON.parse(localStorage.getItem(`Carts`));

        let productName = event.target.parentElement.parentElement.parentElement.querySelector(`.productName`).innerHTML;
        let productColor = event.target.parentElement.parentElement.parentElement.querySelector(`.productColor`).innerHTML;
        let productSize = event.target.parentElement.parentElement.parentElement.querySelector(`.productSize`).innerHTML.replace(`&nbsp;`, ``);
    
        products.forEach(element => {
            if(element.name == productName && element.color == productColor && element.size == productSize){
                element.quantity -= 1;
                event.target.parentElement.querySelector(`.quantity`).innerHTML = element.quantity;
                location.reload();
            }
        });
        localStorage.setItem(`Carts`, JSON.stringify(products));
    }
}

function removeCart(event){
    let products = JSON.parse(localStorage.getItem(`Carts`));

    let productName = event.target.parentElement.parentElement.parentElement.querySelector(`.productName`).innerHTML;
    let productColor = event.target.parentElement.parentElement.parentElement.querySelector(`.productColor`).innerHTML;
    let productSize = event.target.parentElement.parentElement.parentElement.querySelector(`.productSize`).innerHTML.replace(`&nbsp;`, ``);

    products.forEach(element => {
        if(element.name == productName && element.color == productColor && element.size == productSize){
            let index =products.indexOf(element, 0);
            products.splice(index, 1);
            localStorage.setItem(`Carts`, JSON.stringify(products));
        }
        location.reload();
    });
}