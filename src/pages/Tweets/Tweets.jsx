import { useDispatch, useSelector } from 'react-redux';

import {
  selectLoading,
  selectPage,
  selectUsers,
} from 'services/redux/selectors';
import { fetchUsersPageThunk } from 'services/redux/operations';
import { useEffect } from 'react';

import CardsList from 'components/CadsList/CardsList';
import Button from 'components/Button/Button';
import Filter from 'components/Filter/Filter';
import { nextPage } from 'services/redux/slice';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TweetsPageWrapper } from './Tweets.syled';

export const TweetsPage = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const navigate = useNavigate();

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (users.length >= 3) {
      return;
    }

    dispatch(fetchUsersPageThunk(1));
  }, [dispatch, users.length]);

  const savedUsers = Object.values(localStorage)
    .filter(value => value !== 'INFO')
    .map(obj => JSON.parse(obj));

  const usersToFollow = savedUsers.filter(user => user.isFollowing === false);

  const followingUsers = savedUsers.filter(user => user.isFollowing === true);

  const getFilteredUsers = () => {
    if (!1) {
    }
    if (!0) {
    }
  };

  // const followingUsers = savedIds;

  const handleClick = () => {
    dispatch(nextPage(1));

    dispatch(fetchUsersPageThunk(page + 1));

    console.log(savedUsers);
  };

  const handleChange = ({ target }) => {
    if (target.value === 'all') {
      setFilteredUsers([]);
    }
    if (target.value === 'follow') {
      setFilteredUsers([...usersToFollow]);
      console.log(usersToFollow);
    }
    if (target.value === 'followings') {
      setFilteredUsers([...followingUsers]);
      console.log(followingUsers);
    }
  };
  return (
    <>
      <Button
        type="button"
        backgroung="#FFF"
        func={() => navigate(-1)}
        text="back"
      />
      <Filter func={handleChange} />

      <TweetsPageWrapper>
        <CardsList arr={filteredUsers.length ? filteredUsers : users} />;
        {isLoading ? (
          <h1>loading</h1>
        ) : (
          <Button
            type="button"
            func={() => handleClick()}
            text={'Load more'}
            background="radial-gradient(
    circle,
    rgb(50, 78, 201) 0%,
    rgb(219, 226, 121) 100%
  )"
          />
        )}
      </TweetsPageWrapper>
    </>
  );
};
export default TweetsPage;
