const router = require('express').Router();
const mealsRoutes = require('./meals');
const waterRoutes = require('./water');
const nutritionSearch = require('./nutritionSearch');

// Meal routes
router.use('/meals', mealsRoutes);
router.use('/water', waterRoutes);

<<<<<<< HEAD

module.exports = router;
router.use("/usda", nutritionSearch);
=======
router.use('/nutritionix', nutritionSearch);
>>>>>>> 295dfa054b68e4f35b2fab16959c04dd913c93bb

module.exports = router;


// router.use("/routeToChange", routeToChangeRoutes);

module.exports = router;
<<<<<<< HEAD

=======
>>>>>>> 295dfa054b68e4f35b2fab16959c04dd913c93bb
