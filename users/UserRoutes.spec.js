const server = require("../api/server");
const Users = require("./UserModel.js");
const db = require("../data/dbConfig");
const request = require("supertest");

describe("User Routes", () => {
  describe("GET /api/users", () => {
    it("responds with 200 OK", () => {
      return request(server)
        .get("/api/users")
        .expect(200);
    });
  });

  it("should set environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("POST /api/users", () => {
    it("responds with type json", () => {
      return request(server)
        .post("/api/users")
        .expect("Content-Type", /json/i);
    });

    it("inserts provided user into db", async () => {
      let user = { name: "john" };
      let inserted = await Users.insert(user);

      expect(inserted.name).toBe(user.name);
    });
  });
});
