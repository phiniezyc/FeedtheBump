const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes (if route starts w/ "/api", use the routes in apiRoutes...shortens to code and organizes in seperate file)
router.use("/api", apiRoutes);



// If no API routes are hit, send the React app
router.use( (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html")); 
});

module.exports = router;    