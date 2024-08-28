const fs = require("fs");
console.log("core module ");
fs.writeFileSync("file.txt", "this is our file ");
console.log(__filename);
