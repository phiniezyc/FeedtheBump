const db = require('../models');
const now = new Date();
const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

// Defining methods for the mealsController

module.exports = {

  find(req, res) {
    db
      .Meal
      .find({created_on: {$gte: startOfToday}}, function (err, docs));
   },

  findAll(req, res) {
    db
      .Meal
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById(req, res) {
    db
      .Meal
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create(req, res) {
    db
      .Meal
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update(req, res) {
    db
      .Meal
      .findOneAndUpdate({
        _id: req.params.id,
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove(req, res) {
    db
      .Meal
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
