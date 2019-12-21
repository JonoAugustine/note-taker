const { Note } = require("../src/Note");
const { server, routes } = require("../src/server");
const request = require("supertest");

const fs = require("fs");
jest.mock("fs");

describe("Server", () => {
  describe("Static Files", () => {
    // TODO
    it("returns index.html", () => {
      request(server)
        .get(routes.home)
        .expect("Content-Type", /html/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
        });
    });
  });

  describe("API", () => {
    it("should return notes at GET /api/notes", () => {
      request(server)
        .get(routes.api.get)
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
        });
    });

    it("should return created note POST /api/notes", () => {
      request(server)
        .post(routes.api.post)
        .send(new Note("Note", "Note"))
        .expect(200)
        .expect("Content-Type", /json/)
        .end((err, res) => {
          console.log(res.text);
          if (err) throw err;
        });
    });
  });
});
