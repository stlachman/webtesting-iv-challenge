const server = require("../api/server");
const request = require("supertest");

describe("User Routes", () => {
  describe("GET /api/users", () => {
    it("responds with 200 OK", () => {
      return request(server)
        .get("/api/users")
        .expect(200);
    });
  });

  describe("POST /api/users", () => {
    it("responds with 200 OK", () => {
      return request(server)
        .post("/api/users")
        .expect(201);
    });

    it("responds with type json", () => {
      return request(server)
        .post("/api/users")
        .expect("Content-Type", /json/i);
    });
  });
});
