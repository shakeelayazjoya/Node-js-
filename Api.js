const http = require("http");
const Data = require("./Data");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.write(JSON.stringify(Data));
    resp.end();
  })
  .listen(3000, () => {
    console.log("Server is listening on port 6000");
  });
