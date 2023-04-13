function productOnClick(event){
    let item = event.target.parentElement.getAttribute(`id`);
    localStorage.setItem(`Viewing`, JSON.stringify(item));
    window.open(`../ProductPage/Index.html`, `_self`);
}