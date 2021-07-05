const express = require("express");
usersRouter = require("./data/users/users.Router");

const server = express();

server.use(express.json());
server.use("/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "hello" });
});

module.exports = server;
