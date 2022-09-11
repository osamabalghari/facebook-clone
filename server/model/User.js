const mongoose = require("mongoose")
const crypto = require("crypto")

const newSchema = mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    surname: {
        type: String,
        // required: true
    },
    avatar: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    stories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Stories",
        },
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

newSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    return resetToken;
};

module.exports = mongoose.model("User", newSchema)