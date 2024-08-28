const express = require("express");
const app = express();
// cookie and session
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(function (req, resp, next) {
  console.log("Middleware  received");
  next();
});

app.get("/", function (req, resp, next) {
  return next(new Error("Some thing went wrong"));
});
app.use((err, req, resp, next) => {
  console.log(err.stack);
  resp.status(500).send("Internal Server Error");
});

app.listen(3000);
