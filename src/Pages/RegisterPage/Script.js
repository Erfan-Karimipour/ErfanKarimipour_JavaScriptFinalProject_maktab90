`use strict`

import { registerANewAccount } from "../../Modules/RegisterANewAccount/registerANewAccount.js";
import { EyeIconChanger } from "../../Modules/EyeIconChanger/EyeIconChanger.js";
import { InputBorderChanger } from "../../Modules/InputBorderChanger/InputBorderChanger.js";
import { submitBtnDisable } from "../../Modules/SubmitBtnDisable/SubmitBtnDisable.js";

const body = document.querySelector(`body`);
const emailInput = document.getElementById(`emailInput`);
const passwordInput = document.getElementById(`passwordInput`);
const emailInputBox = document.getElementById(`emailInputBox`);
const passwordInputBox = document.getElementById(`passwordInputBox`);
const Eye = document.getElementById(`Eye`);
const submit = document.getElementById(`submit`);



body.addEventListener(`click`, InputBorderChanger)
Eye.addEventListener(`click`, EyeIconChanger)
emailInput.addEventListener(`input`, submitBtnDisable)
passwordInput.addEventListener(`input`, submitBtnDisable)
submit.addEventListener(`click`, registerANewAccount)
