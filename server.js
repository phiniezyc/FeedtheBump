const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//auth2 code
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/"));
});

app.get("/signin", (req, res) => {
    const google_url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:${PORT}/oauth/callback&scope=https://www.googleapis.com/auth/calendar&access_type=offline&response_type=code`;
    res.redirect(google_url);
});

app.get("/oauth/callback", (req, res) => {

    const code = req.param("code");
    axios({url: `https://www.googleapis.com/oauth2/v4/token?code=${code}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=http://localhost:${PORT}/oauth/callback&grant_type=authorization_code`, method: "POST"}).then((response) => {
        console.log("Response: ", response.data);
        res.json({msg: "Ok"});

    }).catch((err) => {
        console.log("Error: ", err.response.data);
        res.json({error: "Error"});

    });
});

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Serve up static assets app.use(express.static("client/build")); Add routes,
// both API and view
app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/feedtheBump", {useMongoClient: true});

app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
