const fs = require("fs");

const path = require("path");

const filename = "AsyncAwaitCrudOperationsExample.txt";
const filepath1 = path.join(__dirname, filename);

const fileppath = __dirname;

// fs.promises
//   .readdir(fileppath)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Write File
// const WriteFileExample = async () => {
//   try {
//     await fs.promises.writeFile(
//       filepath1,
//       "This is the example of CRUD operation in NodeJs using Async/Await"
//     );
//     console.log("File added succfully");
//   } catch (err) {
//     console.log(err);
//   }
// };
// WriteFileExample();

// Read File

// const ReadFileExample = async() =>{
//     try{
//         const res = await fs.promises.readFile(filepath1, 'utf-8')
//         console.log(res);
//     }
//     catch(err){
//       console.log(err)
//     }
// }
// ReadFileExample()


// Update File 

// const UpdateExample = async() =>{

//     try{

//        await fs.promises.appendFile(filepath1, "\n This is the new line", "utf-8")
//        console.log("file updated successfully");
//     }
//     catch(err){
//         console.log(err)
//     }

    
// }

// UpdateExample();


// Deleted file

const DeleteExample = async() =>{

    try{

        fs.promises.unlink(filepath1);
        console.log("file deleted succcfully")

    }
    catch(err){
        console.log(err.message)
    }

}

DeleteExample();