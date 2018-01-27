const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


// If no API routes are hit, send the React app
router.use( (req, res) => {
    console.log("Hello World");
    res.sendFile(path.join(__dirname, "/../client/build/index.html")); //changed from "../client/build/index.html"
});


// API Routes
router.use("/api", apiRoutes);



module.exports = router;    