const http = require("http"); // we are importing the http module from node.js
//we are creating a Server using Node Js
const Server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/") {
    res.write("Home Page\nHello World! From Node.js");
    res.end();
  } else if (req.url === "/about") {
    res.write("About Page\nHello World! From Node.js");
    res.end();
  } else {
    res.write("404 Not Found");
    res.end();
  }
});
Server.listen(1211, () => {
  console.log(`Server is running on port :http://localhost:1211/`);
});
