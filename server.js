const express = require("express");
const http = require("http");
const path = require("path");
const compression = require("compression");

const port = process.env.port || 3000;

const app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, "/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

http.createServer(app).listen(port, () => {
  console.log(`server started at port: ${port}`);
});
