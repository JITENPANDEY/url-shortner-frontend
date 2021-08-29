const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./dist/shorttly"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/shorttly/" });
});
app.listen(process.env.PORT || 8080);
