import axios from 'axios';
import { SETLISTFM_API_URL } from 'Constants';

export const setlistfmAPI = axios.create({
  baseURL: SETLISTFM_API_URL,
  adapter: undefined,
});
