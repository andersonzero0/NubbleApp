import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.4gMMTp2r_zdAgTbziv-ZYpjsTVL48mhF8POL_XhNYTfE7cBcFbYyD1cXpFBG',
  },
});
