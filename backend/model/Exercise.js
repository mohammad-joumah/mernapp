const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    userName: String,
    describtion:String,
    duration:Number,
    date:Date
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;