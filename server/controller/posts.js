const Post = require("../model/Posts");
const User = require("../model/User");
const Stories = require("../model/Stories");

const createPost = async (req, res) => {
  try {
    const { caption, likes } = req.body;

    const post = await Post.create({
      caption,
      image: req.file.filename,
      likes,
      owner: req.user._id,
    });
    const user = await User.findById(req.user._id);

    user.posts.unshift(post._id);
    await user.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const addStories = async (req, res) => {
  try {
    const storie = await Stories.create({
      storyImage: req.file.filename,
      owner: req.user._id,
    });
    const user = await User.findById(req.user._id);
    user.stories.unshift(storie._id);
    await user.save();
    res.status(200).json({ storie });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createPost, addStories };
