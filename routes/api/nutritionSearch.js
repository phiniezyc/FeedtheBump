const router = require("express").Router();
const nutritionSearchController = require ("../../controllers/nutritionSearchController");

// Matches with "/api/usda"
router
    .route("/")
    .get(nutritionSearchController.search);
    // .post(mealsController.create); 



    module.exports = router;