const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    search: {
        type: String,
        required: true
    },
    mealType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Meal = mongoose.model("meal", mealSchema);

module.exports = Meal;
