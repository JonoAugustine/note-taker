const { Note } = require("../src/Note");

describe("Notes", () => {
  describe("Constructor", () => {
    it("Throws with empty constructor", () => {
      expect(() => new Note()).toThrow();
    });

    it("Throws with no text", () => {
      expect(() => new Note("title")).toThrow();
    });

    it("Throws with no title", () => {
      expect(() => new Note(undefined, "text")).toThrow();
    });

    it("Throws with empty title", () => {
      expect(() => new Note("", "text")).toThrow();
    });

    it("Throws with empty text", () => {
      expect(() => new Note("title", "")).toThrow();
    });

    it("Throws with number title", () => {
      expect(() => new Note(0, "text")).toThrow();
    });

    it("Throws with object title", () => {
      expect(() => new Note([], "text")).toThrow();
    });

    it("Throws with object text", () => {
      expect(() => new Note("title", [])).toThrow();
    });

    it("Throws with boolean title", () => {
      expect(() => new Note(false, "text")).toThrow();
      expect(() => new Note(true, "text")).toThrow();
    });

    it("Constructs new Note with given title", () => {
      const t = "title";
      expect(new Note(t, "text").title).toBe(t);
    });

    it("Constructs new Note with given text", () => {
      const t = "text";
      expect(new Note("title", t).text).toBe(t);
    });
  });
});
