const router = require('express').Router();
const mealsRoutes = require('./meals');
const waterRoutes = require('./water');
const nutritionSearch = require('./nutritionSearch');

// Meal routes
router.use('/meals', mealsRoutes);
router.use('/water', waterRoutes);


router.use('/nutritionix', nutritionSearch);


//route works now
router.use('/searchInput', (req, res) =>{
    console.log("test worked");
    res.send("hello");
})

module.exports = router;
