import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64ac07459edb4181202f008d.mockapi.io/users',
});

export const fetchUsers = async limit => {
  console.log(limit + ' items per page in request');
  const { data } = await instance.get('', {
    params: {
      limit,
    },
  });
  // console.log(data);
  return data;
};
export const followUser = (instance.post = user => user.followers++);
export const unfollowUser = (instance.post = user => user.followers--);
