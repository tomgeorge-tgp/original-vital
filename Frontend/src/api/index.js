import axios from 'axios';

// console.log(process.env.REACT_APP_API_ROOT_DEV)
// console.log(process.env.REACT_APP_API_ROOT_DEV)

export default axios.create({
    baseURL: process.env.REACT_APP_API_ROOT_DEV,
});