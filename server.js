const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");
const routes = require("./routes");
const path = require("path");
const morgan = require("morgan");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

//Configure passport authentication
app.use(cookieParser());
app.use(morgan('dev'));
app.use(session({
    secret:'backrow',
    saveUninitialized: true,
    resave:true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/feedtheBump",
  {
    useMongoClient: true
  }
);


// app.get("/", function(req, res){
//   res.json("testing app");
//   console.log("test is working!");
 
// });

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
