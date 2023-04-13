import { loggedIn } from "../LoginStatus/LoggedIn.js";

let allAccounts = localStorage.getItem(`Accounts`);

if (!allAccounts){ 
    allAccounts = [];
} else {
    allAccounts = JSON.parse(allAccounts);
}

export function loginToAccount(remember){
    allAccounts.forEach(element => {
        if(element.Email == emailInput.value && element.Password == passwordInput.value){
            if (JSON.parse(localStorage.getItem(`Remember`))){
                localStorage.setItem(`SavedEmail`, JSON.stringify(emailInput.value));
            }
            loggedIn();
            window.open(`../HomePage/Index.html`, `_self`);
            localStorage.setItem(`CurrentUser`, JSON.stringify(element.Email));
        }
    });
}