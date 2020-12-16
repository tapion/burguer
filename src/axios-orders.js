import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-50475-default-rtdb.firebaseio.com/',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
});

export default instance;