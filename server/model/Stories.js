const mongoose = require("mongoose");

const storiesSchema = mongoose.Schema({
    storyImage: {
        type: String,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Stories", storiesSchema);