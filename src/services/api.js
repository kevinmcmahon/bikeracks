import axios from 'axios';
export default axios.create({
  baseURL: 'https://bh4i9yrgt9.execute-api.us-west-2.amazonaws.com/Prod/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});
