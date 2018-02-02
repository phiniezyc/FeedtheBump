const router = require("express").Router();
const waterController = require("../../controllers/waterController");

// Matches with "/api/water"
router
    .route("/")
    .get(waterController.findAll)
    .post(waterController.create); 

// router
//     .route("/:id")
//     .get(waterController.findById)
//     .put(waterController.update)
//     .delete(waterController.remove);

module.exports = router;