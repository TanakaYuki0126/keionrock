var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    console.log("render homepage")
    res.render("homepage");
});

app.listen(port, function () {
    console.log(`Keion Rock server started at port:${port}`)
});
