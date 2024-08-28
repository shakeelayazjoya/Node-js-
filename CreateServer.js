const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("helo this is sakeel");
    resp.end();
  })
  .listen(4500);
