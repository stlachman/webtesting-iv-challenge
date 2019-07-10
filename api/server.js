const express = require("express");

const server = express();

const UserRoutes = require("../users/UserRoutes.js");

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "it's working" });
});

server.use("/api/users", UserRoutes);

module.exports = server;
