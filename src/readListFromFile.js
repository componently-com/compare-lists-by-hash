const fs = require("fs");

const stringIsNotEmpty = require("./stringIsNotEmpty");

module.exports = function readListFromFile(filename) {
  const lineSeparators = /\r?\n/g;

  const fileContent = fs.readFileSync(filename, { encoding: "utf-8" });
  return fileContent.split(lineSeparators).filter(stringIsNotEmpty);
};
