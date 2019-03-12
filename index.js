const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    request(`https://apiv2.bitcoinaverage.com/indices/global/ticker/${crypto}${fiat}`, function(error, response, body) {
        var data = JSON.parse(body);
        var price = data.last;
        res.send("<h1>The current price of Bitcoin is " + price + " USD</h1>")
    });
});

app.listen(3000, function() {
    console.log("Server up and running on port 3000");
});
