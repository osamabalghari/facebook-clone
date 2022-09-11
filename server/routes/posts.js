const express = require("express");
const { createPost, addStories, likeUnlikePosts } = require("../controller/posts");
const { upload, userAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/createpost", userAuth, upload, createPost);
router.post("/addstories", userAuth, upload, addStories);
router.get("/likeunlikePosts/:id", userAuth, likeUnlikePosts)

module.exports = router;