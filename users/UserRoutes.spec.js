const server = require("../api/server");
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

    it("responds with status 201", async () => {
      let user = { name: "falstaff" };
      await request(server)
        .post("/api/users")
        .send(user)
        .expect(201);
    });

    it("responds with the created user", async () => {
      let user = { name: "falstaff" };
      await request(server)
        .post("/api/users")
        .send(user)
        .then(res => {
          expect(res.body).toEqual({ id: 1, name: "falstaff" });
        });
    });
  });

  describe("DELETE /api/users", () => {
    it("responds with status 204", async () => {
      await request(server)
        .delete("/api/users/2")
        .expect(204);
    });

    it("responds with empty object", async () => {
      await request(server)
        .delete("/api/users/2")
        .then(res => {
          expect(res.body).toEqual({});
        });
    });
  });
});
