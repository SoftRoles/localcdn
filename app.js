var express = require('express');
var path = require('path');
var cors = require("cors")

const app = express();
app.use("/localcdn", express.static(path.join(__dirname, "node_modules")))
app.use("/localcdn", express.static(path.join(__dirname, "bower_components")))
app.use("/localcdn", express.static(path.join(__dirname, "custom")))

app.use(cors())

app.listen(3009, function () {
  console.log("Service running on http://127.0.0.1:3009")
})