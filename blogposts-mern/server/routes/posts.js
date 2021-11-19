import express from 'express';
import {getPosts, createPost, deletePost} from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts); // Home route, shows all posts.
router.post('/', createPost); // Home route, shows all posts.
router.delete('/:id', deletePost); // Delete the post with that id


export default router; // Export the router so that you can use it in the index file.