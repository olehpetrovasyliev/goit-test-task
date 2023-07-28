import { useDispatch, useSelector } from 'react-redux';
import CardsList from './CadsList/CardsList';
import Card from './Card/Card';
import { selectUsers } from 'services/redux/selectors';
import { fetchUsersPageThunk } from 'services/redux/operations';
import { useEffect, useState } from 'react';

export const App = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsersPageThunk(page));
  }, [dispatch, page]);
  const handleClick = () => {
    setPage(prev => prev + 1);
    console.log(page);
  };
  return (
    <>
      <CardsList arr={users} />;
      <button type="button" onClick={handleClick}>
        more users!!!!!
      </button>
    </>
  );
};
