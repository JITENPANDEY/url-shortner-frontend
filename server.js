const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./dist/url-shortner-frontend"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/url-shortner-frontend/" });
});
app.listen(process.env.PORT || 8080);
