var express = require("express");
var app = express();

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
    res.render("join")
})

app.listen(3000, function () {
    console.log("Keiron Rock server started")
});