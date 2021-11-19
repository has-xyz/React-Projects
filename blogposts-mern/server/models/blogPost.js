import mongoose from 'mongoose';

// Creating the values that are needed for a Blog Post - Title, Body, View Count, Created Date
const postSchema = mongoose.Schema({
    title: String,
    body: String,
    user: {
        type: String,
        default: "hasanelmi678"
    },
    viewsCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const BlogPost = mongoose.model('BlogPost', postSchema);
export default BlogPost;