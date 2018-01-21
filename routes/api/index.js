const router = require("express").Router();
const mealsRoutes = require("./meals");
const nutritionSearch = require("./nutritionSearch");

// Meal routes
router.use("/meals", mealsRoutes);

module.exports = router;
router.use("/usda", nutritionSearch);

// router.use("/routeToChange", routeToChangeRoutes);

module.exports = router;

