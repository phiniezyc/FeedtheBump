const router = require("express").Router();
const mealsRoutes = require("./meals");

// Meal routes
router.use("/meals", mealsRoutes);


module.exports = router;

// router.use("/routeToChange", routeToChangeRoutes);

module.exports = router;

