// Example: *("express").Router() is a minimized version of expresses router
// since we are only using for backend

const router = require("express").Router();
const mealsController = require("../../controllers/mealsController");

// // Matches with "/api/books"
router
    .route("/")
    .get(mealsController.findAll)
    .post(mealsController.create); 

router
    .route("/:id")
    .get(mealsController.findById)
    .put(mealsController.update)
    .delete(mealsController.remove);

module.exports = router;