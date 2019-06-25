import api from '@config/api';

export const login = (email, password) => api.post('api/v1/auth/sign_in', { email, password });
