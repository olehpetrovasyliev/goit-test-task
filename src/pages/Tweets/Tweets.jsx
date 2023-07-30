import { useDispatch, useSelector } from 'react-redux';

import { selectUsers } from 'services/redux/selectors';
import { fetchUsersPageThunk } from 'services/redux/operations';
import { useEffect, useState } from 'react';

import { useRef } from 'react';
import CardsList from 'components/CadsList/CardsList';
import Button from 'components/Button/Button';
import Filter from 'components/Filter/Filter';

export const TweetsPage = () => {
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
  }, [dispatch, page]);
  const handleClick = () => {
    setPage(prev => prev + 1);
  };
  return (
    <>
      <Filter />
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
export default TweetsPage;
