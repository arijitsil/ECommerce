const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.user_name = !isEmpty(data.user_name) ? data.user_name : "";
  data.user_pass = !isEmpty(data.user_pass) ? data.user_pass : "";
// Email checks
  if (Validator.isEmpty(data.user_name)) {
    errors.user_name = "User Name field is required";
  }
// Password checks
  if (Validator.isEmpty(data.user_pass)) {
    errors.user_pass = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};