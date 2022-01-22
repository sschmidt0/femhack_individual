const Validator = require('validator');
const isEmpty = require('is-empty');

export const validateInput = (data) => {
  const errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  // check if title and description fields are empty
  if (Validator.isEmpty(data.title)) {
    errors.title = "Entra un título";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Entra una descripción";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
