const router = require("express").Router();
const mealsRoutes = require("./meals");

// Book routes
router.use("/meals", mealsRoutes);

module.exports = router;
