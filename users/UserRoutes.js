const router = require("express").Router();
const Users = require("./UserModel");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "Error retrieving users" });
    });
});

router.post("/", (req, res) => {
  Users.insert(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "Error creating user" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Users.remove(id)
    .then(user => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ message: "Error deleting user" });
    });
});

module.exports = router;
