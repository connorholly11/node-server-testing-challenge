const request = require("supertest");

const server = require("./server");
describe("GET /", () => {
  test("GET /", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("GET / returns hello", async () => {
    const response = await request(server).get("/");

    expect(response.body.message).toBe("hello");
  });
});
