import { useDispatch, useSelector } from 'react-redux';
import CardsList from './CadsList/CardsList';
import Card from './Card/Card';
import { selectUsers } from 'services/redux/selectors';
import { fetchUsersPageThunk } from 'services/redux/operations';
import { useEffect, useState } from 'react';
import Button from './Button/Button';
import { useRef } from 'react';

export const App = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(fetchUsersPageThunk(page));
  }, [page]);
  const handleClick = () => {
    setPage(prev => prev + 1);
  };
  return (
    <>
      <CardsList arr={users} />;
      <Button
        type="button"
        func={handleClick}
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
