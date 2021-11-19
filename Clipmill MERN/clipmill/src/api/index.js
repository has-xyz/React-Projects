import axios from 'axios';

// const url = 'https://clipmill-backend.herokuapp.com/emails';
const url = 'http://localhost:5000/emails';
const paymentUrl = 'http://localhost:5000/payment';

export const createPost = (newPost) => axios.post(url, newPost)
export const createPayment = (newPost) => axios.post(paymentUrl, newPost)
export const fetchPayments = () => axios.get(paymentUrl);

