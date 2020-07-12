const readListFromFile = require("./readListFromFile");
const hashString = require("./hashString");
const isIn = require("./isIn");

module.exports = function countHashHits(inputFilename, hashFilename) {
  const inputs = readListFromFile(inputFilename);
  const hashedInputs = inputs.map(hashString);

  const hashes = readListFromFile(hashFilename);
  return hashedInputs.filter(isIn(hashes)).length;
};
