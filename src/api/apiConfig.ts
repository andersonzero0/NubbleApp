import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.aqTTKICZYkZOORPhbbcqTl2wxt1pNbllBzoRJlWqnwwiJgKFDXjVyDlZH0f2',
  },
});
