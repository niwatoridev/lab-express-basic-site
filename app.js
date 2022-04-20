const { application } = require("express");
const express = require("express");
const { listen } = require("express/lib/application");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/tour", (req, res, next) => {
  res.sendFile(__dirname + "/views/tour.html");
});

app.listen(3000, () => {
  console.log("Estoy corriendo en el puerto 3000");
});
