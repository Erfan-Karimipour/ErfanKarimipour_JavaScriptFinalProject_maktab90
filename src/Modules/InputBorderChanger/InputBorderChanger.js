export function InputBorderChanger(event){
    if (event.target == emailInput){
        emailInputBox.classList.add(`border-black`);
    }
    if (event.target == passwordInput){
        passwordInputBox.classList.add(`border-black`);        
    }
    if (event.target != emailInput){
        emailInputBox.classList.remove(`border-black`);
    }
    if (event.target != passwordInput){
        passwordInputBox.classList.remove(`border-black`);
    }
}