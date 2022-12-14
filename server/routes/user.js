const express = require("express");
const router = express.Router();
const {
  register,
  signIn,
  getOneUser,
  followUser,
  getMyPosts,
  getMyStories,
} = require("../controller/user");
const { userAuth, upload } = require("../middleware/auth");

router.post("/register", upload, register);
router.post("/signin", signIn);
router.get("/getuser", userAuth, getOneUser);
router.get("/follow/:id", userAuth, followUser);
router.get("/me", userAuth, getMyPosts);
router.get("/getstories", userAuth, getMyStories);

module.exports = router;
