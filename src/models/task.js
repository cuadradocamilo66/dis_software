const mongoose = require('mongoose');
const { Schema } = mongoose;

const task = new Schema({
    question: String,
    answer: Number,
    options1: String,
    options2: String,
    options3: String,
    options4: String
});

module.exports = mongoose.model('task', task);