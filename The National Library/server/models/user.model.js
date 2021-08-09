const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Email is required !!"],
		unique: true,
		validate: [ validator.isEmail, 'invalid email !!' ]
	},
	password: {
		type: String,
		required: [true, "Password is required !!"],
        minlength: [8, "Password Can't be less than 8"]
	}
}, { timestamps: true, collection: 'users' });

UserSchema.plugin(uniqueValidator);

const User = mongoose.model("User", UserSchema);

module.exports = User;