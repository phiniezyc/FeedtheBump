const router = require('express').Router();
const mealsRoutes = require('./meals');
const waterRoutes = require('./water');
const nutritionSearch = require('./nutritionSearch');

//Matches w/ "/api/...use routes defined in second parameter"
router.use('/meals', mealsRoutes);
router.use('/water', waterRoutes);
router.use('/nutritionix', nutritionSearch);

module.exports = router;
