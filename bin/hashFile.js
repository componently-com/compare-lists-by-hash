#!/usr/bin/env node

const hashListToFile = require("../src/hashListToFile");

hashListToFile(process.argv[2], process.argv[3]);
