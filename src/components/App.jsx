import { useDispatch, useSelector } from 'react-redux';
import CardsList from './CadsList/CardsList';
import Card from './Card/Card';
import { selectUsers } from 'services/redux/selectors';
import { fetchUsersPageThunk } from 'services/redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  let limit = 3;

  useEffect(() => {
    dispatch(() => fetchUsersPageThunk(limit));
  }, [dispatch, limit]);

  return <CardsList arr={users} />;
};
