const { Note } = require("../src/Note");
const dao = require("../src/dao");
const fs = require("fs");

jest.mock("fs");

describe("DAO operations", () => {
  let note = new Note("TITLE", "TEXT");

  beforeEach(() => (note = new Note("TITLE", "TEXT")));

  it("should write to 'dao'",  () => {
    fs.writeFile.mockReturnValue(new Promise(res => res()));
    const added = await dao.addNote(note);

    expect(added).toBe(true);
    expect(fs.writeFile).toHaveBeenCalled();
  });
});
