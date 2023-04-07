export function EyeIconChanger(){
    let attr = Eye.getAttribute(`name`);
    if (attr == `eye`){
        Eye.setAttribute(`name`, `eye-off`)
        passwordInput.setAttribute(`type`, `text`)
    }
    if (attr == `eye-off`){
        Eye.setAttribute(`name`, `eye`)
        passwordInput.setAttribute(`type`, `password`)
    }
}