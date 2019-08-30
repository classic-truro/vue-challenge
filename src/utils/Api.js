    
import axios from 'axios';

export const API =  axios.create({
  baseURL: 'https://backendapi.turing.com/'
});

export const imgUrl = 'https://backendapi.turing.com/images/products/'
