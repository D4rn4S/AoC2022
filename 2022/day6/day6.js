const fs = require("fs");
const content = fs.readFileSync("./list.txt", { encoding: "utf8", flag: "r" });
console.log(content)
