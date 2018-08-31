const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mealSchema = new Schema({
    food: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        max: 10000,
        required: true
    },
    protein: {
        type: Number,
        max: 100,
        required: true
    },
    calcium: {
        type: Number,
        max: 100,
        required: false
    },
    iron: {
        type: Number,
        max: 100,
        required: false
    },
    meal: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Meal = mongoose.model("Meal", mealSchema); //Mongo pluralizes and lowercases "Meal" as a collection for us

module.exports = Meal;
