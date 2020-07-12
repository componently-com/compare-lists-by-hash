const crypto = require("crypto");

module.exports = function hashString(str) {
  let normalizedStr = str.toLowerCase().trim();
  return crypto.createHash("md5").update(normalizedStr).digest("hex");
};
