const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello Users"
  });
});

router.post("/", (req, res) => {
  res.status(201).json({ something: "heree" });
});

module.exports = router;
