import { useDispatch, useSelector } from 'react-redux';
import CardsList from './CadsList/CardsList';
import Card from './Card/Card';
import { selectUsers } from 'services/redux/selectors';
import { fetchUsersPageThunk } from 'services/redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersPageThunk(1));
  }, [dispatch]);

  return <CardsList arr={users} />;
};
