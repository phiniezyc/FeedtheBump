// mongo methods that are used to grab OR send data from the database and sent to
// api when each route is hit

const db = require("../models");

// Defining methods for the mealssController
module.exports = {
    findAll: function (req, res) {
        db
            .Meal
            .find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db
            .Meal
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db
            .Meal
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db
            .Meal
            .findOneAndUpdate({
                _id: req.params.id
            }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db
            .Meal
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};