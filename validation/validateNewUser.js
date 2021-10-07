const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validateNewUser = (obj) => {
  const { error } = schema.validate(obj);
  return error;
};

module.exports = validateNewUser;
