import { useDispatch, useSelector } from 'react-redux';
import CardsList from './CadsList/CardsList';
import Card from './Card/Card';
import { selectUsers } from 'services/redux/selectors';
import { fetchUsersPageThunk } from 'services/redux/operations';
import { useEffect, useState } from 'react';
import Button from './Button/Button';

export const App = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    page > 0 && dispatch(fetchUsersPageThunk(page));
  }, [page]);
  const handleClick = () => {
    setPage(prev => prev + 1);
    console.log(page);
  };
  return (
    <>
      <CardsList arr={users} />;
      <Button type="button" func={handleClick} text={'Load more'} />
    </>
  );
};
