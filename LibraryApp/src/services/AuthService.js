import api from '@config/api';
import AsyncStorage from '@react-native-community/async-storage';
import authActions from '@redux/auth/actions';

export const setCurrentUser = async (token, client, uid) => {
  api.setHeader('Access-Token', token);
  const accessToken = ['@Auth:accessToken', JSON.stringify(token)];
  const userId = ['@Auth:userId', JSON.stringify(uid)];
  const clientNumber = ['@Auth:client', JSON.stringify(client)];
  return AsyncStorage.multiSet([accessToken, clientNumber, userId]);
};
export const getCurrentUserToken = async () => AsyncStorage.getItem('@Auth:accessToken').then(JSON.parse);

export const initialAuth = async dispatch => {
  const token = await getCurrentUserToken();
  if (token) dispatch(authActions.initRemembered());
};

export const login = (email, password) => api.post('api/v1/auth/sign_in', { email, password });
