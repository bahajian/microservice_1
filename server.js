const express = require("express");
const bodyParser  = require("body-parser");
const rest = require("./routes.js");
const config = require('./config');
const app  = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// include the routes
app.use('/', rest);

app.listen(process.env.PORT || config.port,() => {
    console.log("All right ! I am alive at Port 5000.");
});