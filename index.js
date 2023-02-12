// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();
const { param, validationResult } = require("express-validator");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + "/public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// first test
app.get("/api/:date", param("date").isDate(), function (req, res, next) {
  try {
    validationResult(req).throw();
    date = new Date(req.params.date);
    unix = date.getTime();
    res.json({ unix });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log(
    "Your app is listening on http://localhost:" + listener.address().port
  );
});
