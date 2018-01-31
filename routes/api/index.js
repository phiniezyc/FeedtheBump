const router = require('express').Router();
const mealsRoutes = require('./meals');
const waterRoutes = require('./water');
const nutritionSearch = require('./nutritionSearch');

// Meal routes
router.use('/meals', mealsRoutes);
router.use('/water', waterRoutes);


router.use('/nutritionix', nutritionSearch);


// //route works now
// router.use('/searchInput/:id', (req, res) =>{
//    //but don't know how to get parameters into the route
//     res.send("test" + req.params.id);
// })

module.exports = router;
