const { User } = require("../models");

const getOne = (filter) => {
  return User.findOne(filter);
};

const getById = (id) => {
  return User.findById(id);
};

const updateById = (id, updateInfo) => {
  return User.findByIdAndUpdate(id, updateInfo, { new: true });
};

const add = ({ email, password, name }) => {
  const newUser = new User({ email, name });
  newUser.setPassword(password);
  return newUser.save();
};

module.exports = {
  getOne,
  getById,
  updateById,
  add,
};
