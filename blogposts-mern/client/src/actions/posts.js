import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts() // Gets the data from the fetchPosts function in the api
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch(error) {
        console.log(error.message)
    }
}


export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post) // Creates a post using the function in the api
        dispatch({type: 'CREATE', payload: data})
    } catch(error) {
        console.log(error.message)
    }
}


export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: 'DELETE', payload: id})
    } catch(error) {
        console.log(error.message)
    }
}