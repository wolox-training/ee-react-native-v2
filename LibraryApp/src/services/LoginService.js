import api from '@config/api';

export const login = (email, password) =>
  api.post('https://wolox-training-rails.herokuapp.com/api/v1/auth/sign_in', { email, password });
