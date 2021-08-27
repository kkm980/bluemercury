//User model for signup

const mongoose = require("mongoose");
const { Schema } = mongoose;

//user"s schema
const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    first_Name: { type: String, required: true },
    last_Name: { type: String, required: true },
    birthday: { type: String, required: true },
}, {timestamps: false, versionKey: false});

//creating model for user
const User = mongoose.model("User", userSchema);

//export
module.exports = User;