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
        required: [true, "Author is required !!"],
    },
    desc: {
        type: String,
        required: [true, "Description is required !!"],
        minlength: [5, "Description Can't be less than 5"],
    },
    imges: { type: String },
    category: {
        type: String,
        enum: ['Other', 'Programming Books', 'Science Books', 'Palestinian novels', 'kids books', 'Arabic novels']
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