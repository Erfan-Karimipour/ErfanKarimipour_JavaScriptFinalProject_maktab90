export function submitBtnDisable(){
    if (emailInput.value && emailInput.value.includes(`@`) && !emailInput.value.includes(` `) && passwordInput.value && !passwordInput.value.includes(` `)){
        submit.removeAttribute(`disabled`);
        submit.style.backgroundColor = `#3c3c3c`;
    }
    else if(!emailInput.velue || !passwordInput.value || emailInput.value.includes(` `) || !emailInput.value.includes(`@`) || !passwordInput.value.includes(` `)){
        submit.removeAttribute(`disabled`, true);
        submit.style.backgroundColor = `#9ca3af`;
    }
}