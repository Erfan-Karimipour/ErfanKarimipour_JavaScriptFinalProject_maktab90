export function selectedSizeChanger(){
    let size = document.querySelector(`.size`);
size.addEventListener(`click`, (event) => {
  if(event.target.classList.contains(`sizes`)){
    document.querySelector(`.selectedSize`).classList.remove(`selectedSize`);
    event.target.classList.add(`selectedSize`);
  }
});
}