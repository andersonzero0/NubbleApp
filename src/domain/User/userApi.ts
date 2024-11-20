import {api} from '@api';

import {UserAPI} from './userTypes';

const PATH = 'users';

async function getById(userId: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${PATH}/${userId}`);

  // TODO: delay
  await new Promise<void>(resolve => setTimeout(resolve, 1000));

  return response.data;
}

export const userApi = {
  getById,
};
