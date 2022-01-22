const Validator = require('validator');
const isEmpty = require('is-empty');

export const validateInput = (data) => {
  const errors = {};
  const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  // Convert empty fields to an empty string so we can use validator functions
  data.userName = !isEmpty(data.userName) ? data.userName : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  // userName: check if field is empty
  if (Validator.isEmpty(data.userName)) {
    errors.userName = "Entra un nombre de usuario";
  }

  // email: check if field is empty and email is a valid format
  if (Validator.isEmpty(data.email)) {
    errors.email = "Entra un correo electrónico";
  } else if (data.email.match(emailRegEx) === null) {
    errors.email = "Correo no válido";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
