import axios from 'axios';

const url = 'https://hasan-blog-server.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url); // Gets all the posts from the server at that url
export const createPost = (newPost) => axios.post(url, newPost) // Creates a new post 
export const deletePost = (id) => axios.delete(`${url}/${id}`) // Delete the post with that id  
