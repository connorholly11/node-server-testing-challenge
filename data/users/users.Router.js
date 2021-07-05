const express = require("express");
const db = require("./usersModel");

const router = express.Router();

router.get("/", (req, res) => {
  db.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/", (req, res) => {
  const newUser = req.body;

  db.addUser(newUser)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.deleteUser(id)
    .then(user => {
      res.status(204).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
