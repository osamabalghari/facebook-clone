const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/user")
const postRouter = require("./routes/posts")
require("dotenv").config()
const connectDb = require("./db/database")
const path = require("path")

connectDb()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/backend/uploads", express.static(path.join(__dirname, "uploads")))
app.use("/api/auth", userRouter)
app.use("/api/post", postRouter)

app.listen(process.env.PORT, () => {
    console.log(`Port is Running on ${process.env.PORT}`);
})