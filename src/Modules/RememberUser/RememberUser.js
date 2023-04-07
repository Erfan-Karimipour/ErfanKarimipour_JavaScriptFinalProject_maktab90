export function rememberUser(remember){
    if(rememberMe.getAttribute(`name`)==`square-outline`){
        rememberMe.setAttribute(`name`, `checkbox`);
        remember = true;
    } else {
        rememberMe.setAttribute(`name`, `square-outline`);
        remember = false;
    }
    localStorage.setItem(`Remember`, JSON.stringify(remember));
}