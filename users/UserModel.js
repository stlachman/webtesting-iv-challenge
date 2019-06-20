const db = require("../data/dbConfig.js");

module.exports = {
  insert
};

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return db("users")
    .where({ id })
    .first();
}
