const { Note } = require("./Note");
const { promisify } = require("util");
const fs = require("fs");
const wf = promisify(fs.writeFile);
const rf = promisify(fs.readFile);

const writeFile = async (file, data) => wf(file, data, "UTF-8");
const readFile = async file => rf(file, "UTF-8");

const nadb = "./db.json";
let db = {};
load();

/**
 * Saves top-level db instance to file.
 */
const save = async () => {
  try {
    await writeFile(nadb, JSON.stringify(db));
  } catch (err) {
    // TODO
  }
};

/**
 * Loads db from file.
 */
const load = async () => {
  try {
    const f = await readFile(nadb);
    db = JSON.parse(f);
  } catch (err) {
    await save();
  }
};

/**
 * Adds a note to the 'db' and saves to file.
 * @param {Note} note
 * @returns {boolean}
 */
const addNote = async note => {
  try {
    db[note.id] = note;
    await save();
    return true;
  } catch (err) {
    return false;
  }
};

/**
 *
 * @param {string} id Note ID
 * @returns {Note} deleted Note or null if not found or an err occurrs.
 */
const deleteNote = async id => {
  try {
    const old = db[id];
    delete db[id];
    await save();
    return old;
  } catch (err) {
    return null;
  }
};

module.exports = { addNote, deleteNote };
