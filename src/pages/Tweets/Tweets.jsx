import { useDispatch, useSelector } from 'react-redux';

import {
  // selectLoading,
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

export const TweetsPage = () => {
  const users = useSelector(selectUsers);
  // const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const navigate = useNavigate();

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (users.length >= 3) {
      return;
    }
    // setTimeout(() => {
    dispatch(fetchUsersPageThunk(1));
    // }, 0);
  }, [dispatch, users.length]);

  const savedIds = Object.keys(localStorage);

  const followingUsers = savedIds;

  const handleClick = () => {
    dispatch(nextPage(1));
    console.log(1);
    dispatch(fetchUsersPageThunk(page + 1));
  };
  // const handleChange = value => {};
  return (
    <>
      <Button
        type="button"
        backgroung="#FFF"
        func={() => navigate(-1)}
        text="back"
      />
      <Filter />
      <CardsList arr={users} />;
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
    </>
  );
};
export default TweetsPage;
