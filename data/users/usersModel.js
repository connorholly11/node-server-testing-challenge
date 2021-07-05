const db = require("../../db.config");

module.exports = {
  getUsers,
  addUser,
  deleteUser
};

function getUsers() {
  return db("users");
}

async function addUser(newUser) {
  const [id] = await db("users").insert(newUser);

  return db("users")
    .where({ id })
    .first();
}

function deleteUser(id) {
  return db("users")
    .where("id", "=", id)
    .del();
}
