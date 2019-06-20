const server = require("./server");
const request = require("supertest");

describe("server", () => {
  describe("GET /", () => {
    it("responds with 200 ok", () => {
      return request(server)
        .get("/")
        .expect(200);
    });

    it("responds with content type json", () => {
      return request(server)
        .get("/")
        .expect("Content-Type", /json/i);
    });

    it("responds with the correct message ", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ message: "it's working" });
        });
    });

    it("responds with content type json", () => {
      return request(server)
        .get("/")
        .expect("Content-Type", /json/i);
    });
  });
});
