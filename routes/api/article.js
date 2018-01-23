const router = require("express").Router();
const healthArticleController = require ("./healthArticleController");

router
    .route("/")
    .get(healthArticleController.search);


module.exports = router;