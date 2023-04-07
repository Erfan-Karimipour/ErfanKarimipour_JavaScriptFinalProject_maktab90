`use strict`

import { EyeIconChanger } from "../Modules/EyeIconChanger/EyeIconChanger.js";
import { InputBorderChanger } from "../Modules/InputBorderChanger/InputBorderChanger.js";
import { rememberUser } from "../Modules/RememberUser/RememberUser.js";
import { submitBtnDisable } from "../Modules/SubmitBtnDisable/SubmitBtnDisable.js";
import { loginToAccount } from "../Modules/LoginToAccount/LoginToAccount.js";
import { loggedIn } from "../Modules/LoginStatus/LoggedIn.js";
import { loggedOut } from "../Modules/LoginStatus/LoggedOut.js";
import { logginStatusCheck } from "../Modules/LoginStatus/LoginStatusCheck.js";

const body = document.querySelector(`body`);
const emailInput = document.getElementById(`emailInput`);
const passwordInput = document.getElementById(`passwordInput`);
const emailInputBox = document.getElementById(`emailInputBox`);
const passwordInputBox = document.getElementById(`passwordInputBox`);
const Eye = document.getElementById(`Eye`);
const rememberMeBox = document.getElementById(`rememberMeBox`);
const rememberMe = document.getElementById(`rememberMe`);
const submit = document.getElementById(`submit`);

if (JSON.parse(localStorage.getItem(`SavedEmail`))){
    emailInput.value=JSON.parse(localStorage.getItem(`SavedEmail`));
}

localStorage.removeItem(`Remember`);

body.addEventListener(`click`, InputBorderChanger)
Eye.addEventListener(`click`, EyeIconChanger)
emailInput.addEventListener(`input`, submitBtnDisable)
passwordInput.addEventListener(`input`, submitBtnDisable)
rememberMeBox.addEventListener(`click`, rememberUser)
submit.addEventListener(`click`, loginToAccount)