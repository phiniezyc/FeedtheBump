const router = require('express').Router();
const mealsRoutes = require('./meals');
const waterRoutes = require('./water');
const nutritionSearch = require('./nutritionSearch');
// const userSearchInput = require('./userSearchInput');

// Meal routes
router.use('/meals', mealsRoutes);
router.use('/water', waterRoutes);

// router.use("/nutritionix", nutritionSearch);
router.use('/nutritionix', nutritionSearch);


// router.use('/searchInput', userSearchInput)



module.exports = router;
