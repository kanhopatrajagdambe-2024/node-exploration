
const  fs = require('fs');
const path = require('path');
// const filepath=console.log(__dirname);

const filepath=path.join(__dirname, 'test.txt')
const createnewFile = fs.writeFileSync(filepath, "Hello wecome to Nodejs", 'utf-8')

const filepath2=path.join(__dirname, 'demo.txt')
const createnewFile2 = fs.writeFileSync(filepath2, "Hello wecome to thapa technicle", 'utf-8')

const readFile= fs.readFileSync(filepath);
console.log(readFile.toString())

const readFile2= fs.readFileSync(filepath2, 'utf-8');
console.log(readFile2)



const appendFile = fs.appendFileSync(filepath, "\nhello world!", 'utf-8')

const deletefile = fs.unlinkSync(filepath)


const newfilename = "test.txt";
const newpath = path.join(__dirname,newfilename )
const renamefile = fs.renameSync(filepath2,newpath );