
/* file system*/ 
const fs = require('fs');

/* write a file*/ 
fs.writeFileSync('note.txt', 'hello from node.js');

/* read a file*/
const data = fs.readFileSync('note.txt', 'utf-8');

/*dispaly file*/ 
console.log('file content:', data);