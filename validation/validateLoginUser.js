const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validateLoginUser = (obj) => {
  const { error } = schema.validate(obj);
  return error;
};

module.exports = validateLoginUser;
