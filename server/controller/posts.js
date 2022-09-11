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

const likeUnlikePosts = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) {
            res.status(400).json({ success: false, message: "Post not found" })
            return
        }

        if (post.likes.includes(req.user._id)) {
            const index = post.likes.indexOf(req.user._id)
            post.likes.splice(index, 1)
            await post.save()
            res.status(200).json({ success: true, message: "Like" })
        } else {
            post.likes.push(req.user._id)
            await post.save()
            res.status(200).json({ success: true, message: "Liked" })
        }

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = { createPost, addStories, likeUnlikePosts };