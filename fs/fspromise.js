const fs = require("fs");
const path = require("path");

const filepath = __dirname;

fs.promises
  .readdir(filepath)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

  const filename = "promiseexample.txt"
  const filepath1 = path.join(__dirname, filename)
fs.promises.writeFile(
    filepath1,
  "this is initial data",
  "utf-8")
    .then(() => console.log("File added succssfully"))
    .catch((err) => console.log(err))
;

//Read file using Promise

fs.promises.readFile(filepath1, "utf-8")
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
// Update with promises

fs.promises.appendFile(filepath1, "\nthis is the appened data", 'utf-8')
.then(data=>console.log("\nFile Udpated successfully"))
.catch(error=>console.log(error))


//Delete File using promises

fs.promises.unlink(filepath1)
.then(()=>console.log("file deleted succsfully"))
.catch((err)=>console.log(err))