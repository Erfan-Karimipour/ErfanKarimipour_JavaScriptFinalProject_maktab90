export function quantityCounter(){
    let remove = document.querySelector(`.remove`);
  let add = document.querySelector(`.add`);
  let quantity = document.querySelector(`.quantity`);
  let counter = 0;
  axios.get(`http://localhost:3000/Shoes?id=${JSON.parse(localStorage.getItem(`Viewing`))}`).then((res) => {
    res = res.data;
    res = res[0];
  
    const totalPrice = document.querySelector(`.totalPrice`);
    totalPrice.innerHTML = `$ `+ counter * res.price + `.00`;

    remove.addEventListener(`click`, () => {
      if (counter>0){
        counter -= 1;
      quantity.innerHTML=counter;
      }
      const totalPrice = document.querySelector(`.totalPrice`);
      totalPrice.innerHTML = `$ `+ counter * res.price + `.00`;
  })
  
    add.addEventListener(`click`, () => {
      counter += 1;
      quantity.innerHTML=counter;
      const totalPrice = document.querySelector(`.totalPrice`);
      totalPrice.innerHTML = `$ `+ counter * res.price + `.00`;
  })
  })
}