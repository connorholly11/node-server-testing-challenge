const request = require("supertest");

const server = require("./server");

test("GET /", () => {
  return request(server)
    .get("/")
    .then(res => {
      res.status().toBe(200);
    });
});
