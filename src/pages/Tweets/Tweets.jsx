import { useDispatch, useSelector } from 'react-redux';

import {
  selectLoading,
  selectPage,
  selectUsers,
} from 'services/redux/selectors';
import { fetchUsersPageThunk } from 'services/redux/operations';
import { useEffect, useRef } from 'react';

import CardsList from 'components/CadsList/CardsList';
import Button from 'components/Button/Button';
import Filter from 'components/Filter/Filter';
import { nextPage } from 'services/redux/slice';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ButtonsPageWrapper, TweetsPageWrapper } from './Tweets.syled';

export const TweetsPage = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterValue, setFilterValue] = useState('all');

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const navigate = useNavigate();
  const prevFilterValue = useRef(filterValue);

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

  useEffect(() => {
    if (prevFilterValue.current === filterValue) {
      return;
    }

    prevFilterValue.current = filterValue;
    if (filterValue === 'all') {
      setFilteredUsers([]);
    }
    if (filterValue === 'follow') {
      setFilteredUsers([...usersToFollow]);
    }
    if (filterValue === 'followings') {
      setFilteredUsers([...followingUsers]);
    }
  }, [filterValue, followingUsers, usersToFollow]);

  const handleClick = () => {
    dispatch(nextPage(1));

    dispatch(fetchUsersPageThunk(page + 1));
  };

  const handleChange = ({ target }) => {
    setFilterValue(target.value);
  };
  return (
    <>
      <TweetsPageWrapper>
        <ButtonsPageWrapper>
          <Button
            type="button"
            backgroung="#FFF"
            func={() => navigate(-1)}
            text="back"
          />
          <Filter func={handleChange} />
        </ButtonsPageWrapper>
        <CardsList arr={filteredUsers.length ? filteredUsers : users} />
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
