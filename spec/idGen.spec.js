const { idLeng, ID } = require("../src/ID.js");

describe("ID Generator", () => {
  it("Generates id string", () => {
    expect(ID()).toMatch(/.+/gi);
  });

  it(`Generates id string ${idLeng} char long`, () => {
    expect(ID()).toMatch(new RegExp(`.{${idLeng}}`, "gi"));
  });
  
  it("Makes unique strings", () => {
    let set = new Set();
    for (let i = 0; i < 1000; i++) {
      const id = ID();
      expect(set.has(id)).toBe(false);
      set.add(id);
    }
  });
});
