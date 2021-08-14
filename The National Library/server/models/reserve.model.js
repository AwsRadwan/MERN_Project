const mongoose = require("mongoose");
const validator = require('validator');


const ReserveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required !!"],
        minlength: [3, "Name Can't be less than 3"],
    },
    phone: {
        type: Number,
        min: [10, "Phone Number Can't be less than 10"]
    },
    email: {
        type: String,
        required: [true, "Email is required !!"],
        validate: [validator.isEmail, 'invalid email !!']
    },
    address: String,
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book.model"
    }
}, { timestamps: true, collection: 'reserves' });

const Reserve = mongoose.model("Reserve", ReserveSchema);

module.exports = Reserve;