const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const ProductRoute = require("./routes/product");
const UserRoute = require("./routes/admin");

dotenv.config(".env");

const app = express();
app.use(cookieParser());
//Set template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

// 1) GLOBAL MIDDLEWARES

//Serving static files
app.use(express.static(path.join(__dirname, "public")));

// 2) ROUTES
app.use("/admin", UserRoute);
app.use("/", ProductRoute);
// app.get('/post', (req, res) => {
//   res.send('hi');
// });

module.exports = app;
