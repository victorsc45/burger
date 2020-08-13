//dependencies for server file 

const express = require('express');
const body_parser = require('body-parser');
env = require("dotenv").config();

const PORT = process.env.PORT || 3006;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

// Set Handlebars.
const exphbs = require("express-handlebars");
//handlebars required setup engine and default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});