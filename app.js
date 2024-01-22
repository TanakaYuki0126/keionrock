var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    console.log("render homepage")
    res.render("homepage");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error...")
})

app.listen(port, function () {
    console.log(`Keion Rock server started at http://localhost:${port}`)
});
