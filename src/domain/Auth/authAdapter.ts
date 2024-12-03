import {userAdapter} from '../User';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authCredentialsAPI.auth.token,
    refreshToken: authCredentialsAPI.auth.refreshToken,
    tokenExpiresAt: authCredentialsAPI.auth.expires_at,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
}

export const authAdapter = {toAuthCredentials};
