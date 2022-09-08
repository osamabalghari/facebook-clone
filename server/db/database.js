const mongoose = require("mongoose")
require("dotenv").config()

const connectDb = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`Database connected to ${process.env.MONGO_URL}`);
}

module.exports = connectDb