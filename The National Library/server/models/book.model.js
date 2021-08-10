const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required !!"],
        minlength: [3, "Title Can't be less than 3"],
        unique: true
    },
    author: {
        type: String,
        required: [true, "Title is required !!"],
    },
    desc: {
        type: String,
        required: [true, "Title is required !!"],
        minlength: [5, "Title Can't be less than 5"],
    },
    price: {
        type: Number,
        default: 1
    },

    comments: [{ name: String, body: String, date: Date }],
    reserves: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "reserve.model"
        }
    ]
}, { timestamps: true, collection: 'books' });

BookSchema.plugin(uniqueValidator);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;