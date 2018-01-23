const router = require("express").Router();
const mealsRoutes = require("./meals");
const waterRoutes = require("./water");
const nutritionSearch = require("./nutritionSearch");

// Meal routes
router.use("/meals", mealsRoutes);
router.use("/water", waterRoutes);

module.exports = router;
router.use("/usda", nutritionSearch);

// router.use("/routeToChange", routeToChangeRoutes);

module.exports = router;

