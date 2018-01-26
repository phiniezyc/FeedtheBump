const router = require("express").Router();
const mealsRoutes = require("./meals");
const waterRoutes = require("./water");
const nutritionSearch = require("./nutritionSearch");
const articleRoutes = require("./article");

// Meal routes
router.use("/meals", mealsRoutes);
router.use("/water", waterRoutes);

router.use("/article", articleRoutes)

router.use("/usda", nutritionSearch);

// router.use("/routeToChange", routeToChangeRoutes);

module.exports = router;