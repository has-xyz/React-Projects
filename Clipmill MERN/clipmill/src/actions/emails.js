import {CREATE, FETCH_ALL} from '../constants/actionTypes'
import * as api from '../api';

// Action creators

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)
        dispatch({type: CREATE, payload: data})
    } catch(error) {
        console.log(error.message)
    }
}

export const createPayment = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPayment(post)
        dispatch({type: CREATE, payload: data})
    } catch(error) {
        console.log(error.message)
    }
}

export const getPayments = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPayments()
        dispatch({type: FETCH_ALL, payload: data});
    } catch(error) {
        console.log(error.message)
    }
}
