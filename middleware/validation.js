const Joi = require("@hapi/joi");
const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  const validation = schema.validate(data);
  return validation;
};

module.exports.registerValidation = registerValidation;
