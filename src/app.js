/*
 */
const express = require("express");
const path = require("path");
const flash = require("connect-flash");
const exphbs = require("express-handlebars");
const session = require("express-session");
const MySQLStore = require("express-mysql-session");
const morgan = require("morgan");
const passport = require("passport");

/* modulo para las variabes de entorno  */


// config
const app = express();
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./libs/handlebar"),
  })
);
app.set("view engine", ".hbs");

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//global variables

//routes ---paso directamente la ruta

//files statics
app.use(express.static(path.join(__dirname, "public")));

// page 404

//export the server
module.exports = app;
