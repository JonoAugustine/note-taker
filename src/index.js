const path = require("path");
const express = require("express");
const dao = require("./dao");
const { Note } = require("./Note");

const routes = {
  home: "*",
  notes: "/notes",
  api: {
    get: "/api/notes",
    post: "/api/notes",
    delete: "/api/notes/:id"
  }
};

const server = express();
server.use(express.static(path.join(__dirname, "public")));

server.get(routes.home, (_, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.get(routes.notes, (_, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

server.get(routes.api.get, (_, res) => res.json(dao.getNotes()));

server.post(routes.api.post, async (req, res) => {
  try {
    const b = JSON.parse(req.body);
    const n = Note.from(b);
    const added = await dao.addNote(n);
    if (added) {
      res.json(n);
    } else {
      res.status(500).send("failed to add new note.");
    }
  } catch (err) {
    res.status(400).send(err.toString());
  }
});

server.delete(routes.api.delete, async (req, res) => {
  try {
    if (typeof req.params.id !== "string") {
      res.status(400).send(`Delete requires note ID ${routes.api.delete}`);
    }
    const deleted = await dao.deleteNote(req.params.id);

    if (deleted) res.json(deleted);
    else res.status(404).send("note not found");
  } catch (err) {
    res.status(500);
  }
});
