import api from '@config/api';
import AsyncStorage from '@react-native-community/async-storage';

const LOGIN_ENDPOINT = 'api/v1/auth/sign_in';

const TOKEN_STORAGE = '@Auth:accessToken';
const CLIENT_STORAGE = '@Auth:client';
const UID_STORAGE = '@Auth:userId';

export const setCurrentUser = async ({ token, client, uid }) => {
  api.setHeaders({
    'Access-Token': token,
    Client: client,
    Uid: uid
  });
  const accessToken = [TOKEN_STORAGE, JSON.stringify(token)];
  const userId = [UID_STORAGE, JSON.stringify(uid)];
  const clientNumber = [CLIENT_STORAGE, JSON.stringify(client)];
  return AsyncStorage.multiSet([accessToken, clientNumber, userId]);
};

export const getCurrentUser = async () => {
  const values = await AsyncStorage.multiGet([TOKEN_STORAGE, CLIENT_STORAGE, UID_STORAGE]);
  const headers = {
    token: JSON.parse(values[0][1]),
    client: JSON.parse(values[1][1]),
    uid: JSON.parse(values[2][1])
  };
  return {
    headers,
    ok: headers.token && headers.client && headers.uid
  };
};

export const login = ({ email, password }) => api.post(LOGIN_ENDPOINT, { email, password });

export const logout = () => AsyncStorage.multiRemove([TOKEN_STORAGE, UID_STORAGE, CLIENT_STORAGE]);
