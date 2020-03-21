const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data){

    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if(!Validator.isEmpty(data.email)){
        errors.email = "Email field required";
    }
    else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    if(!Validator.isEmpty(data.password)){
        errors.password = "Password field required";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};