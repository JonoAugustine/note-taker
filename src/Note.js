const { ID } = require("./ID");

class Note {
  /**
   * @param {string} title
   * @param {string} text
   */
  constructor(title, text) {
    if (typeof title !== "string" || title.length < 1) {
      throw new Error("Invalid Title");
    } else if (typeof text !== "string" || text.length < 1) {
      throw new Error("Invalid Text");
    }
    this.title = title;
    this.text = text;
    this.id = ID();
  }
}

module.exports = { Note };
