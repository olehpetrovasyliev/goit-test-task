import { useDispatch, useSelector } from 'react-redux';

import {
  // selectLoading,
  selectPage,
  selectUsers,
} from 'services/redux/selectors';
import { fetchUsersPageThunk } from 'services/redux/operations';
import { useEffect } from 'react';

import { useRef } from 'react';
import CardsList from 'components/CadsList/CardsList';
import Button from 'components/Button/Button';
import Filter from 'components/Filter/Filter';
import { nextPage } from 'services/redux/slice';
// import { useState } from 'react';

export const TweetsPage = () => {
  const users = useSelector(selectUsers);
  // const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isFirstRender = useRef(true);
  // const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (users.length >= 3) {
      return;
    }

    dispatch(fetchUsersPageThunk(1));
  }, [dispatch, users.length]);

  // const savedUser = id => JSON.parse(localStorage.getItem(String(id)));

  const handleClick = () => {
    dispatch(nextPage(1));

    dispatch(fetchUsersPageThunk(page + 1));
  };
  // const handleChange = value => {};
  return (
    <>
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
