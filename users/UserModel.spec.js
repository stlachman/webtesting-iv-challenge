const Users = require("./UserModel.js");
const db = require("../data/dbConfig");

describe("User Model", () => {
  it("should set environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("insert users to database", () => {
    it("inserts provided user into db", async () => {
      let user = { name: "john" };
      let inserted = await Users.insert(user);

      expect(inserted.name).toBe(user.name);
    });
  });

  describe("delete a user in the database", () => {
    it("removes user from database", async () => {
      let usersNumber;
      usersNumber = await db("users");
      expect(usersNumber).toHaveLength(0);
      await Users.insert({ name: "Spider Man" });
      await Users.insert({ name: "Green Goblin" });
      usersNumber = await db("users");
      expect(usersNumber).toHaveLength(2);
    });
  });
});
