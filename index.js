//=============================================================================
// http server
//=============================================================================
const express = require('express');
const argparse = require('argparse').ArgumentParser
const path = require("path")

//-------------------------------------
// arguments
//-------------------------------------
const argParser = new argparse({
  addHelp: true,
  description: 'Localcdn service'
})
argParser.addArgument(['-p', '--port'], { help: 'Listening port', defaultValue: '3009' })
const args = argParser.parseArgs()

//=============================================================================
// http server
//=============================================================================
const app = express();

//-------------------------------------
// common middlewares
//-------------------------------------
app.use(require('cors')())

//-------------------------------------
// static middlewares
//-------------------------------------
app.use("/localcdn", express.static(path.join(__dirname, "node_modules")))
app.use("/localcdn", express.static(path.join(__dirname, "bower_components")))
app.use("/localcdn", express.static(path.join(__dirname, "custom")))

//=============================================================================
// start service
//=============================================================================
app.listen(Number(args.port), function () {
  console.log(`Service running on http://127.0.0.1:${args.port}`)
})
