const fs = require("fs");
fs.writeFileSync("./dist/dynamic.txt", "This file is the result of a build step");
console.log("build step completed");
