const path = require('path')

console.log(__dirname)
console.log(__filename)

//school folder/students/data.txt

const filepath = path.join("folder", "student", "data.txt");
console.log(filepath)

const parseData = path.parse(filepath)
const resolvedPath = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)

console.log({parseData,resolvedPath,extname,basename,dirname})