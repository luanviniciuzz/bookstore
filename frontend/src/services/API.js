import axios from 'axios';


let cliente_http = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 3000,
  responseType: 'json',
  responseEncoding: 'utf8',
});


export default cliente_http;