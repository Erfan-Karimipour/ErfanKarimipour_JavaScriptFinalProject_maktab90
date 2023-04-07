// import { loggedIn } from "./LoggedIn";

export function logginStatusCheck(){
    let loggedStatus = JSON.parse(localStorage.getItem(`LoggedIn`));
    if (!loggedIn) window.open(`../../src/LoginPage/Index.html`);
}