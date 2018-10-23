import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3002',
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.get['Content-Type'] = 'application/json';


export default instance;
