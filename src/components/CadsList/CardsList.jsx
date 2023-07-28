import Card from 'components/Card/Card';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersPageThunk } from 'services/redux/operations';
import { selectContacts } from 'services/redux/selectors';

const CardsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(() => fetchUsersPageThunk(3));
  }, []);
  console.log(contacts);
  return (
    <ul>
      {contacts.map(el => (
        <Card user={el} />
      ))}
    </ul>
  );
};

export default CardsList;
