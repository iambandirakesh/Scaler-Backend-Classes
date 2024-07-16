const fs = require("fs"); // it imports the file system module so, it provides the multiple methods to work with files.
let data = fs.readFileSync("./Class1/FileOperations/data.txt"); // it reads the data from the file
console.log(data.toString());
fs.appendFileSync("./Class1/FileOperations/data.txt", "\nHello World"); // // it appends the data to the file
data = fs.readFileSync("./Class1/FileOperations/data.txt"); // it reads the data from the file
console.log(data.toString());
// fs.mkdirSync("dist");
