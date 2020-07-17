const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.pass = !isEmpty(data.pass) ? data.pass : "";
// Name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.name = "Name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email_id)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.pass)) {
    errors.pass = "Password field is required";
  }
// if (Validator.isEmpty(data.user_pass2)) {
//     errors.user_pass2 = "Confirm password field is required";
//   }
// if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
//     errors.password = "Password must be at least 6 characters";
//   }
// if (!Validator.equals(data.user_pass, data.user_pass2)) {
//     errors.password2 = "Passwords must match";
//   }
return {
    errors,
    isValid: isEmpty(errors)
  };
};