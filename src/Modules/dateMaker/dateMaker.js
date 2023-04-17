export function dateMaker() { 
    let month = new Date().toLocaleDateString(`en-US`, {month: "short"});
let day = new Date().getDate();

const Economy = document.getElementById(`Economy`);
const Regular = document.getElementById(`Regular`);
const Cargo = document.getElementById(`Cargo`);
const Express = document.getElementById(`Express`);

Economy.innerHTML = `${month} ${day + 10}-${day + 13}`
Regular.innerHTML = `${month} ${day + 8}-${day + 10}`
Cargo.innerHTML   = `${month} ${day + 3}-${day + 4}`
Express.innerHTML = `${month} ${day + 1}-${day + 2}`
 }