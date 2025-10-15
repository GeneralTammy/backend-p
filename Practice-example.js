/** file system */
const fs = require("fs");

/**write a file */
fs.writeFileSync("note1.txt", "hello from node.js");

/** read a file */
const data = fs.readFileSync("note.txt", "utf-8");

/** display file */
console.log("file content:", data);