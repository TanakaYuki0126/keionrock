var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    res.render("homepage");
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/activity", function (req, res) {
    res.render("activity");
});

app.get("/join", function (req, res) {
    res.render("join");
});

app.get("/links", function (req, res) {
    res.render("links");
});


app.listen(port, function () {
    console.log(`Keiron Rock server started at http://localhost:${port}`)
});