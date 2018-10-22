import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3002';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';

