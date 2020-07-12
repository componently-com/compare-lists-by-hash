#!/usr/bin/env node

const countHashHits = require("../src/countHashHits");

console.log(countHashHits(process.argv[2], process.argv[3]));
