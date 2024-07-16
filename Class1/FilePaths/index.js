const path = require("path"); // it imports the path module so, it provides the multiple methods to work with file paths.

console.log("filepath:", __filename); //it gives the file path of the current file.

console.log("dirname:", __dirname); // it gives the directory path of the current file.

console.log("isAbsolute:", path.isAbsolute(__filename)); //it checks whether the path is absolute or not.

console.log("sep:", path.sep); // it gives the path separator. i.e /

console.log("delimiter:", path.delimiter); // it gives the path delimiter. i.e ;

console.log("path", process.env.PATH); // it gives the path of the environment variable.

console.log("extension", path.extname(__filename)); // it gives the extension of the file.

console.log(
  "relative path",
  path.relative(
    __filename,
    "C:\\Users\\<NAME>\\Documents\\GitHub\\Node.js\\Class1\\index.js"
  )
); // it gives the relative path of the file.
