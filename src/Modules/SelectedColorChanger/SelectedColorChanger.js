export function selectedColorChanger(){
    let color = document.querySelector(`.color`);
color.addEventListener(`click`, (event) => {
  if(event.target.classList.contains(`colors`)){
    document.querySelector(`.selectedColor`).classList.remove(`selectedColor`);
    event.target.classList.add(`selectedColor`);
  }
})
}