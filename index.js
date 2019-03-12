const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function() {
    console.log("Server up and running on port 3000");
});
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});