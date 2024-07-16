const fs = require("fs");
const demoFiledata = fs.readFileSync("./Class1/data.txt");
console.log(demoFiledata.toString());
const http = require("http");
//--Creating the server--//
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
        <html>
            <head>
               <title>Node.js</title>
            </head>
            <body>
               <h1>Hello Node.js</h1>
            </body>
        </html>
        `);
    res.end();
  } else {
    res.write(`Page not found`);
    res.end();
  }
});
server.listen(3003, () => {
  console.log("Server is running on port 3003 `http://localhost:3003/`");
});
