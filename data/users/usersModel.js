const db = require("../../db.config");

module.exports = {
  getUsers,
  addUser,
  deleteUser
};

function getUsers() {
  return db("users");
}

function addUser(newUser) {
  return null;
}

function deleteUser() {
  return null;
}
