const fs = require("fs");
const os = require("os");

const hashString = require("./hashString");
const readListFromFile = require("./readListFromFile");

module.exports = function hashListToFile(inputFile, outputFile) {
  const lines = readListFromFile(inputFile);
  fs.writeFileSync(outputFile, lines.map(hashString).join(os.EOL));
};
