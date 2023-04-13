export function wishChecker(){

    const addToWish = document.querySelector(`.addToWish`);
    const removeFromWish = document.querySelector(`.removeFromWish`);
  
    let wishes = JSON.parse(localStorage.getItem(`Wishes`));
    wishes==null ? wishes=[] : wishes = wishes;
    let viewing = JSON.parse(localStorage.getItem(`Viewing`));
  
    if (wishes.includes(viewing)){
      addToWish.classList.add(`hidden`);
      removeFromWish.classList.remove(`hidden`);
    }
  }