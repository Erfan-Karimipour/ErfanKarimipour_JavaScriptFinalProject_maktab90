let allAccounts = localStorage.getItem(`Accounts`);

if (!allAccounts){ 
    allAccounts = [];
} else {
    allAccounts = JSON.parse(allAccounts);
}

export function registerANewAccount(){
    let newUser = {
        Email    : emailInput.value,
        Password : passwordInput.value 
    }

    axios.post(`http://localhost:3000/Accounts`, {
        Email    : emailInput.value,
        Password : passwordInput.value,
        Orders: [],
        Addresses: []
    });

    allAccounts.push(newUser);
    localStorage.setItem(`Accounts`, JSON.stringify(allAccounts));
    window.open(`../LoginPage/Index.html`, `_self`)
}