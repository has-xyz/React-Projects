import mongoose from 'mongoose';
import BlogPost from '../models/blogPost.js'


// GET ALL THE POSTS INSIDE THE DATABASE
export const getPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find() // Finds all the posts in the mongo database
        res.status(200).json(blogPosts) // Sends all the found posts to the browser in json format
    } catch (err) {
        res.status(404).json({ message: err.message}) // Send 404 error to the browser in json format
    }
}

// CREATE A POST AND SEND IT TO THE MONGO DATABASE
export const createPost = async (req, res) => {
    const post = req.body; // Gets the details of the post
    const newPost = new BlogPost(post); // Create a new blog post with the inputted values
    try {
        await newPost.save(); // Saves the post to the mongo database
        res.status(201).json(newPost) // Send the newly created post to the browser in json format
    } catch (err) {
        res.status(409).json({ message: err.message}) // Send 404 error to the browser in json format
    }
}

// DELETE A SELECTED POST
export const deletePost = async (req, res) => {
    const {id: _id} = req.params; // GET THE ID OF THE POST YOU WANT TO DELETE
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID'); // NO POST WITH THIS ID FOUND

    // Delete
    await BlogPost.findByIdAndRemove(_id) // DELETE THE POST FROM THE DATABASE
    res.json({message: 'Post deleted successfully.'})
}