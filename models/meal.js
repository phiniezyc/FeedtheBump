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
    meal: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Meal = mongoose.model("Meal", mealSchema); //Mongo pluralizes and makes lowercase "Meal" as a collection for us 

module.exports = Meal;
