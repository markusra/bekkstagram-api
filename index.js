let bodyParser = require("body-parser");
let express = require("express");
let mongoose = require("mongoose");

let apiRoutes = require("./routes");
let app = express();

var port = process.env.PORT || 8080;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

mongoose.connect(
  "mongodb://admin:bekkstagram4ever@ds129536.mlab.com:29536/heroku_5vb136zc"
);
var db = mongoose.connection;

app.use("/api", apiRoutes);

app.listen(port, function() {
  console.log("Running bekstagram-api on port " + port);
});
