import axios from 'axios';

const url = axios.create({
  baseURL: 'https://fakestoreapi.com/products'
});

export default url;