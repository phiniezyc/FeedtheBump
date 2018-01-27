const router = require('express').Router();
const userSearchInputController = require('../../controllers/userSearchInputController');

// Matches with "/api/nutritionix"
router
  .route('/:id')
//   .get(userSearchInputController)
  // .post(userSearchInputController.create);
  router
  .route('/:id')
//   .get(mealsController.findById)
  
module.exports = router;