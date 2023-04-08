export function InputBorderChanger(event){
    if (event.target == emailInput){
        emailInputBox.classList.add(`border-black`);
        emailInputBox.classList.remove(`border-white`);
    }
    if (event.target == passwordInput){
        passwordInputBox.classList.add(`border-black`);   
        passwordInputBox.classList.remove(`border-white`);     
    }
    if (event.target != emailInput){
        emailInputBox.classList.remove(`border-black`);
        emailInputBox.classList.add(`border-white`);
    }
    if (event.target != passwordInput){
        passwordInputBox.classList.remove(`border-black`);
        passwordInputBox.classList.add(`border-white`);
    }
}