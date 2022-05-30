import axios from 'axios';

export const fetchApi = axios.create({
    baseURL: 'localhost:4000/api/v1',
    
})