const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  find
};

function find() {
  return db("users");
}

async function insert(user) {
  const [id] = await db("users").insert(user, "id");
  return db("users")
    .where({ id })
    .first();
}
