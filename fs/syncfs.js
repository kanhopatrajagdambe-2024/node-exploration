const fs= require('fs');
const path = require('path');
console.log(__dirname)


const filepath= 'test2.txt';

 fs.writeFileSync('test.txt', 'This is my first file', 'utf-8')
 fs.writeFileSync(filepath, 'This is my first file2', 'utf-8')

// const readFile = fs.readFileSync(filepath)
// console.log(readFile.toString());

const readFile = fs.readFileSync(filepath, 'utf-8')
console.log(readFile);


const appendFile= fs.appendFileSync(filepath,"\nthis us updated line of code", 'utf-8')
