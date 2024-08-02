
const emailRegex = /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^\d{4,}$/;
;

function validateEmail(val) {
    const isEmailValid = emailRegex.test(val);
    return isEmailValid;
};

function validatePhone(val) {
    const isPhoneValid = phoneRegex.test(val);
    return isPhoneValid;
};

export { validateEmail, validatePhone };