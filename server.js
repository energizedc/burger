var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");


var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

//////    setups up express     ////////////////////////////////
app.use(express.static("public"));

// Sets up the Express app to handle data parsing    ///////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

////   setup up the routes here       /////////////////////////////
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

/////////////////////////////////////////////////////////////////
//     Listen on port 8080
/////////////////////////////////////////////////////////////////

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("HI   Server listening on: http://localhost:" + PORT);
  });
  