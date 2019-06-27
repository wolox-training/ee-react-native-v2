import { create } from 'apisauce';
import Config from 'react-native-config';

const baseURL = Config.API_BASE_URL;

const api = create({
  baseURL,
  timeout: 5000
});

export default api;
