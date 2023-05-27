const express = require("express");
const http = require("http");

const app = express();
const port = 3000;

const wsMap = new Map();

app.use(express.static("public"));


app.listen(3000, () => {
  console.log("Server is running on port", port);
});
