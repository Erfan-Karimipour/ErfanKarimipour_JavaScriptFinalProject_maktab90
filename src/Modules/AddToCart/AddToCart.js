export function addToCart(){
  const addToCart = document.querySelector(`.addToCart`);
  addToCart.addEventListener(`click`, () => {
  if(+document.querySelector(`.quantity`).innerHTML>0){
    axios.get(`http://localhost:3000/Shoes?id=${JSON.parse(localStorage.getItem(`Viewing`))}`).then((res) => {
        let price = res.data[0].price;
        let newCart = {
          user: JSON.parse(localStorage.getItem(`CurrentUser`)),
          id: JSON.parse(localStorage.getItem(`Viewing`)),
          price: price,
          quantity: +document.querySelector(`.quantity`).innerHTML,
          color: document.querySelector(`.selectedColor`).parentElement.getAttribute(`color`),
          size: document.querySelector(`.selectedSize`).innerHTML,
          img: document.querySelector(`img`).getAttribute(`src`),
          name: document.querySelector(`.productName`).innerHTML
        };
        
        let carts = JSON.parse(localStorage.getItem(`Carts`));
        if (!carts){
          carts = [];
        };
        carts.forEach(cart => {
            if (cart.id == newCart.id && cart.color == newCart.color && cart.size == newCart.size){
              newCart.quantity += cart.quantity;
              carts.pop(cart);
            };
        });
        carts.push(newCart);
        localStorage.setItem(`Carts`, JSON.stringify(carts));
    })
  };
})
}