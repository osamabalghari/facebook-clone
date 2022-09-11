const User = require("../model/User");
const Post = require("../model/Posts");
const Stories = require("../model/Stories");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../middleware/sendMail")

const register = async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const hash = bcrypt.hashSync(password, 10);
        const user = await User.create({
            name,
            email,
            surname,
            password: hash,
            avatar: req.file.filename,
        });
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const signIn = async (req, res) => {
    try {
        const { _id, email, password } = req.body;
        const user = await User.findOne({ email });
        const validate = bcrypt.compareSync(password, user.password);
        if (!email) {
            res.status(400).json({
                success: false,
                message: "Please Sign Up you did not have any account",
            });
            return;
        }
        if (!validate) {
            res
                .status(400)
                .json({ success: false, message: "Password did not match" });
            return;
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
            expiresIn: "2h",
        });
        res.status(200).json({
            success: true,
            message: "Successfully Log In",
            validate,
            token,
            user,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.status(200).json([user]);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getAllUser = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const followUser = async (req, res) => {
    try {
        const userToFollow = await User.findById(req.params.id);
        const loggedInUser = await User.findById(req.user._id);
        if (!userToFollow) {
            res.status(400).json({ success: false, message: "User did not found" });
            return;
        }
        if (loggedInUser.following.includes(userToFollow._id)) {
            const indexFollowing = loggedInUser.following.indexOf(userToFollow._id);
            loggedInUser.following.splice(indexFollowing, 1);
            const indexFollowers = userToFollow.followers.indexOf(loggedInUser._id);
            userToFollow.followers.splice(indexFollowers, 1);
            await loggedInUser.save();
            await userToFollow.save();
            res
                .status(200)
                .json({ success: false, message: "Unfollow" });
            return;
        }
        loggedInUser.following.push(userToFollow._id);
        userToFollow.followers.push(loggedInUser._id);
        await loggedInUser.save();
        await userToFollow.save();
        res.status(200).json({ success: true, message: "Follow" });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


const forgetPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(400).json({ success: false, message: "Email not Found" })
            return
        }
        const resetPassword = user.getResetPasswordToken()
        await user.save();

        const resetUrl = `${req.protocol}://${req.get(
            "host"
        )}/password/reset/${resetPassword}`;

        const message = `Reset Your Password by clicking on the link below: \n\n ${resetUrl}`;
        try {
            await sendEmail({
                email: user.email,
                subject: "Reset Password",
                message,
            });

            res.status(200).json({
                success: true,
                message: `Email sent to ${user.email}`,
            });
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();

            res.status(500).json({
                success: false,
                message: error.message,
            });
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getMyPosts = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        const posts = [];

        for (let i = 0; i < user.posts.length; i++) {
            const post = await Post.findById(user.posts[i]).populate(
                "likes comments.user owner"
            );
            posts.push(post);
        }

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getMyStories = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const myStory = [];
        for (let i = 0; i < user.stories.length; i++) {
            const post = await Stories.findById(user.stories[i]);
            myStory.push(post);
        }

        res.status(200).json(myStory);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    register,
    signIn,
    getOneUser,
    followUser,
    getMyPosts,
    getMyStories,
    getAllUser, forgetPassword
};