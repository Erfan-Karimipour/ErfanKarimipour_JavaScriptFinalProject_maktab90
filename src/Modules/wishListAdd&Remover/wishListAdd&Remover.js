export function wishListAddAndRemover(){
    const addToWish = document.querySelector(`.addToWish`);
const removeFromWish = document.querySelector(`.removeFromWish`);

addToWish.addEventListener(`click`, () => {

  let wishes = JSON.parse(localStorage.getItem(`Wishes`));
  wishes==null ? wishes=[] : wishes = wishes;
  let viewing = JSON.parse(localStorage.getItem(`Viewing`));

  if(!wishes.includes(viewing)){
    wishes.push(viewing);
  };
  
  addToWish.classList.add(`hidden`);
  removeFromWish.classList.remove(`hidden`);

  localStorage.setItem(`Wishes`, JSON.stringify(wishes));
});

removeFromWish.addEventListener(`click`, () => {

  let wishes = JSON.parse(localStorage.getItem(`Wishes`));
  wishes==null ? wishes=[] : wishes = wishes;
  let viewing = JSON.parse(localStorage.getItem(`Viewing`));

  wishes.pop(viewing);

  addToWish.classList.remove(`hidden`);
  removeFromWish.classList.add(`hidden`);

  localStorage.setItem(`Wishes`, JSON.stringify(wishes));
});
}