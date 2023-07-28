import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64ac07459edb4181202f008d.mockapi.io/users',
});

export const fetchUsers = async page => {
  const { data } = await instance.get('', {
    params: {
      limit: 3,
      page,
    },
  });

  return data;
};
export const followUser = (instance.post = user => user.followers++);
export const unfollowUser = (instance.post = user => user.followers--);
