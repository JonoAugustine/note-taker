const { promisify } = require("util");

const writeFile = async file => promisify(require("fs").writeFile);
const readFile = async file => promisify(require(require("fs").readFile));

module.exports = {};
