var express = require('express');
var path = require('path');

const app = express();
app.use("/localcdn", express.static(path.join(__dirname, "node_modules")))
app.use("/localcdn", express.static(path.join(__dirname, "bower_components")))

app.listen(3009, function () {
  console.log("Service running on http://127.0.0.1:3009")
})