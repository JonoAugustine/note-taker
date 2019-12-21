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

  /**
   *
   * @param {object} obj
   * @returns {Note} Returns note created from given object or err if invalid.
   */
  static from(obj) {
    if (
      obj &&
      typeof obj["text"] === "string" &&
      typeof obj["title"] === "string"
    ) {
      return new Note(obj.title, obj.text);
    }
    throw new Error(
      `Invalid note source "${
        typeof obj === "object" ? JSON.stringify(obj) : obj
      }"`
    );
  }
}

module.exports = { Note };
