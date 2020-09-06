const express = require("express");
const app = express();
const homeRoute = require("./routes/home.routes.js")
const path = require("path")
const bodyParser = require('body-parser');

app.set("port", process.env.PORT || 3000)
app.set('views', './views')
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')));
//Routes
app.use(homeRoute)

module.exports = app