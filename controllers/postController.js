const Post = require('../models/Post');

// Create a new post
const createPost = async (req, res) => {
    try {
        const { post_type, file_address, caption, user_id } = req.body;

        const post = new Post({ post_type, file_address, caption, user_id });

        await post.save();
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user_id', 'username name');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createPost, getPosts };
