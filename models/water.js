const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const waterSchema = new Schema({
    
    water: {
        type: Number,
        max: 10000,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Water = mongoose.model("Water", waterSchema); 

module.exports = Water;
